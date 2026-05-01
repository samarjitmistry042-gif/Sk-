import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  FileText,
  PlusCircle,
  Building2,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn } from "../lib/utils";

const INQUIRIES = [
  {
    id: "INQ-8829",
    title: "Tech Park Phase II Discussion",
    date: "Oct 12, 2026",
    status: "In Review",
    company: "SK Industrial Plaza",
  },
  {
    id: "INQ-8742",
    title: "Material Supply Contract",
    date: "Sep 28, 2026",
    status: "Approved",
    company: "SK Enterprise",
  },
];

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "new">("overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-theme(spacing.24))] bg-primary-black">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary-blue-dark border-r border-white/5 flex flex-col">
        <div className="p-6 md:p-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-gold flex items-center justify-center rounded-sm clip-diagonal">
              <Building2 className="text-primary-black w-6 h-6" />
            </div>
            <div>
              <span className="block text-sm font-bold text-white leading-tight">
                Acme Corp
              </span>
              <span className="block text-xs text-primary-gold uppercase tracking-wider">
                Client Portal
              </span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors text-left",
              activeTab === "overview"
                ? "bg-white/10 text-primary-gold"
                : "text-gray-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <LayoutDashboard className="w-5 h-5" /> Overview
          </button>
          <button
            onClick={() => setActiveTab("new")}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors text-left",
              activeTab === "new"
                ? "bg-white/10 text-primary-gold"
                : "text-gray-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <PlusCircle className="w-5 h-5" /> New Project Request
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded text-sm font-medium text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {activeTab === "overview" ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Welcome back, Client
            </h1>
            <p className="text-gray-400 mb-10">
              Here is an overview of your recent project inquiries and ongoing
              developments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-blue-dark border border-white/10 p-6">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  Total Inquiries
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  12
                </div>
              </div>
              <div className="bg-primary-blue-dark border border-white/10 p-6 border-l-2 border-l-primary-gold">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  Active Projects
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  2
                </div>
              </div>
              <div className="bg-primary-blue-dark border border-white/10 p-6">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  Pending Reviews
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  1
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <FileText className="text-primary-gold" /> Recent Inquiries
              </h2>
              <div className="bg-primary-blue-dark border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-gray-400 text-sm uppercase tracking-wider">
                        <th className="p-4 font-medium">ID</th>
                        <th className="p-4 font-medium">Title</th>
                        <th className="p-4 font-medium">Division</th>
                        <th className="p-4 font-medium">Date</th>
                        <th className="p-4 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {INQUIRIES.map((inq) => (
                        <tr
                          key={inq.id}
                          className="hover:bg-white/5 transition-colors"
                        >
                          <td className="p-4 text-sm font-medium text-gray-300">
                            {inq.id}
                          </td>
                          <td className="p-4 text-sm text-white">
                            {inq.title}
                          </td>
                          <td className="p-4 text-sm text-gray-400">
                            {inq.company}
                          </td>
                          <td className="p-4 text-sm text-gray-400">
                            {inq.date}
                          </td>
                          <td className="p-4 text-sm text-right">
                            <span
                              className={cn(
                                "inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border",
                                inq.status === "Approved"
                                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                                  : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                              )}
                            >
                              {inq.status === "Approved" ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <Clock className="w-3 h-3" />
                              )}
                              {inq.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              New Project Request
            </h1>
            <p className="text-gray-400 mb-10">
              Submit a new commercial or industrial project request directly to
              our team.
            </p>

            <form
              className="bg-primary-blue-dark border border-white/10 p-8 shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Request submitted successfully!");
                setActiveTab("overview");
              }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300">
                    Project Title <span className="text-primary-gold">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold"
                    placeholder="e.g. New IT Park Logistics Setup"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300">
                    Target Division <span className="text-primary-gold">*</span>
                  </label>
                  <select
                    required
                    className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold appearance-none"
                  >
                    <option value="">Select Division</option>
                    <option value="sk-industrial-plaza">
                      SK Industrial Plaza
                    </option>
                    <option value="sk-construction">SK Construction</option>
                    <option value="sk-enterprise">SK Enterprise</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-300">
                    Project Details & Requirements{" "}
                    <span className="text-primary-gold">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold resize-none"
                    placeholder="Provide as much details as possible..."
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-gold text-primary-black font-bold hover:bg-primary-gold-light transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
