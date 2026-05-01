import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  Building2,
  HardHat,
  Calendar,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function EmployeeDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "directory" | "projects"
  >("overview");
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
              <Users className="text-primary-black w-6 h-6" />
            </div>
            <div>
              <span className="block text-sm font-bold text-white leading-tight">
                SK Group
              </span>
              <span className="block text-xs text-primary-gold uppercase tracking-wider">
                Employee Portal
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
            onClick={() => setActiveTab("projects")}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors text-left",
              activeTab === "projects"
                ? "bg-white/10 text-primary-gold"
                : "text-gray-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <HardHat className="w-5 h-5" /> Active Projects
          </button>
          <button
            onClick={() => setActiveTab("directory")}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-colors text-left",
              activeTab === "directory"
                ? "bg-white/10 text-primary-gold"
                : "text-gray-400 hover:bg-white/5 hover:text-white",
            )}
          >
            <Users className="w-5 h-5" /> Team Directory
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
        {activeTab === "overview" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Internal Dashboard
            </h1>
            <p className="text-gray-400 mb-10">
              Access your daily operations, company bulletins, and management
              tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-blue-dark border border-white/10 p-6">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  My Tasks
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  8
                </div>
              </div>
              <div className="bg-primary-blue-dark border border-white/10 p-6 border-l-2 border-l-primary-gold">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  Upcoming Meetings
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  3
                </div>
              </div>
              <div className="bg-primary-blue-dark border border-white/10 p-6">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  Leave Balance
                </h3>
                <div className="text-4xl font-serif font-bold text-white">
                  12
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <FileText className="text-primary-gold" /> Company Announcements
              </h2>
              <div className="bg-primary-blue-dark border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 text-gray-400 text-sm uppercase tracking-wider">
                        <th className="p-4 font-medium">Date</th>
                        <th className="p-4 font-medium">Title</th>
                        <th className="p-4 font-medium">Author</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-sm text-gray-400">
                          Oct 26, 2026
                        </td>
                        <td className="p-4 text-sm text-white">
                          Q3 All Hands Meeting Schedule
                        </td>
                        <td className="p-4 text-sm font-medium text-gray-300">
                          HR Dept
                        </td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-sm text-gray-400">
                          Oct 20, 2026
                        </td>
                        <td className="p-4 text-sm text-white">
                          New Safety Protocols for Construction Sites
                        </td>
                        <td className="p-4 text-sm font-medium text-gray-300">
                          Safety Operations
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Active Projects
            </h1>
            <p className="text-gray-400 mb-10">
              Manage and view the status of ongoing internal operations and
              client builds.
            </p>
            <div className="bg-primary-blue-dark border border-white/10 p-8 text-center text-gray-400">
              Project management view is under construction. Check back soon.
            </div>
          </div>
        )}

        {activeTab === "directory" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold text-white mb-2">
              Team Directory
            </h1>
            <p className="text-gray-400 mb-10">
              Find contact information for your colleagues across all divisions.
            </p>
            <div className="bg-primary-blue-dark border border-white/10 p-8 text-center text-gray-400">
              Directory synchronizing with enterprise LDAP...
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
