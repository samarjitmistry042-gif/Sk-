const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

const lines = content.split('\n');

let portfolioStart = lines.findIndex(l => l.includes('{/* Real Estate Projects Section */}'));
let portfolioEnd = portfolioStart;
while (portfolioEnd < lines.length && !lines[portfolioEnd].includes('</section>')) { portfolioEnd++; }
if (lines[portfolioEnd].includes('</section>')) portfolioEnd++;

let divisionsStart = lines.findIndex(l => l.includes('{/* Businesses Overview */}'));
let divisionsEnd = divisionsStart;
while (divisionsEnd < lines.length && !lines[divisionsEnd].includes('</section>')) { divisionsEnd++; }
if (lines[divisionsEnd].includes('</section>')) divisionsEnd++;

const newLines = [];
let i = 0;
while (i < lines.length) {
  if (i === portfolioStart) {
    for(let j=divisionsStart; j<divisionsEnd; j++) {
      newLines.push(lines[j]);
    }
    i = portfolioEnd;
  } else if (i === divisionsStart) {
    i = divisionsEnd;
  } else {
    newLines.push(lines[i]);
    i++;
  }
}

fs.writeFileSync('src/pages/Home.tsx', newLines.join('\n'));
