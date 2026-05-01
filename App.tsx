/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Divisions from "./pages/Divisions";
import SubCompany from "./pages/SubCompany";
import JobApplication from "./pages/JobApplication";
import ProjectRequest from "./pages/ProjectRequest";
import AppointmentSelection from "./pages/AppointmentSelection";
import CareerSelection from "./pages/CareerSelection";
import ClientDashboard from "./pages/ClientDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import LoginSelection from "./pages/LoginSelection";
import ClientLogin from "./pages/ClientLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Leadership from "./pages/Leadership";
import Culture from "./pages/Culture";
import Services from "./pages/Services";
import Aura from "./pages/Aura";
import Azzora from "./pages/Azzora";
import Amezment from "./pages/Amezment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="company/:companyId" element={<SubCompany />} />
          <Route path="company/:companyId/apply" element={<JobApplication />} />
          <Route
            path="company/:companyId/project-request"
            element={<ProjectRequest />}
          />
          <Route path="appointment" element={<AppointmentSelection />} />
          <Route path="career" element={<CareerSelection />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="culture" element={<Culture />} />
          <Route path="services" element={<Services />} />
          <Route path="hospitality/aura" element={<Aura />} />
          <Route path="hospitality/azzora" element={<Azzora />} />
          <Route path="hospitality/amezment" element={<Amezment />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard/client" element={<ClientDashboard />} />
          <Route path="dashboard/employee" element={<EmployeeDashboard />} />
          <Route path="login" element={<LoginSelection />} />
          <Route path="login/client" element={<ClientLogin />} />
          <Route path="login/employee" element={<EmployeeLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}
