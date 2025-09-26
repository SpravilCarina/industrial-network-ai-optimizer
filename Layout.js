
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Network, 
  Shield, 
  Cpu, 
  Wifi, 
  BarChart3, 
  AlertTriangle,
  Settings,
  Monitor,
  Menu,
  X,
  Bot,
  FileText,
  Brain,
  Workflow, // New import
  Signal, // New import
  ClipboardCheck, // New import
  HardDrive, // New import
  Share2 // New import
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard Principal", url: createPageUrl("Dashboard"), icon: Monitor },
  { title: "Topologia Rețelei", url: createPageUrl("NetworkTopology"), icon: Network },
  { title: "Orchestrare AI", url: createPageUrl("Orchestration"), icon: Workflow }, // New item
  { title: "Rețea 5G", url: createPageUrl("Industrial5G"), icon: Signal }, // New item
  { title: "Centrul de Securitate", url: createPageUrl("SecurityCenter"), icon: Shield },
  { title: "Dispozitive IoT", url: createPageUrl("IoTDevices"), icon: Wifi },
  { title: "Noduri Edge", url: createPageUrl("EdgeNodes"), icon: Cpu },
  // Analytics & AI item was removed, AI Assistant and Predictive Analytics are separate now
  { title: "Asistent AI", url: createPageUrl("AIAssistant"), icon: Bot },
  { title: "Analiză Predictivă", url: createPageUrl("PredictiveAnalytics"), icon: Brain },
  { title: "Rapoarte AI", url: createPageUrl("AIReports"), icon: FileText },
  { title: "Audit & Conformitate", url: createPageUrl("ComplianceAudit"), icon: ClipboardCheck }, // New item
  { title: "Backup & Recuperare", url: createPageUrl("SystemBackup"), icon: HardDrive }, // New item
  { title: "Integrări", url: createPageUrl("Integrations"), icon: Share2 }, // New item
  { title: "Alertări Active", url: createPageUrl("Alerts"), icon: AlertTriangle }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <style>{`
        :root {
          --primary-bg: #0f1419;
          --secondary-bg: #1a1f2e;
          --accent-blue: #00d4ff;
          --accent-teal: #14b8a6;
          --danger-red: #ef4444;
          --warning-amber: #f59e0b;
          --success-green: #10b981;
          --text-primary: #ffffff;
          --text-secondary: #94a3b8;
          --border-color: #334155;
        }
        
        .industrial-gradient {
          background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        
        .status-indicator {
          animation: pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes pulse {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
      `}</style>
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full industrial-gradient">
          <Sidebar className="border-r border-slate-700 bg-slate-800/50 backdrop-blur-sm">
            <SidebarHeader className="border-b border-slate-700 p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center glow-effect">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-white">IndustrialAI</h2>
                  <p className="text-xs text-slate-400">Rețele Autonome v2.1</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-3">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-slate-700 hover:text-cyan-400 transition-all duration-300 rounded-xl mb-2 ${
                            location.pathname === item.url 
                              ? 'bg-slate-700 text-cyan-400 shadow-lg shadow-cyan-500/25' 
                              : 'text-slate-300'
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup className="mt-8">
                <div className="px-4 py-3 bg-slate-700/50 rounded-xl border border-slate-600">
                  <h3 className="text-sm font-semibold text-slate-300 mb-3">Status Sistem</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full status-indicator"></div>
                      <span className="text-slate-400">Rețea: </span>
                      <span className="text-green-400 font-medium">Operațională</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full status-indicator"></div>
                      <span className="text-slate-400">AI Engine: </span>
                      <span className="text-cyan-400 font-medium">Activ</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full status-indicator"></div>
                      <span className="text-slate-400">Alertări: </span>
                      <span className="text-yellow-400 font-medium">3 Active</span>
                    </div>
                  </div>
                </div>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-700 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <span className="text-slate-300 font-medium text-sm">A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-200 text-sm truncate">Administrator</p>
                  <p className="text-xs text-slate-400 truncate">Acces complet sistem</p>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>

          <main className="flex-1 flex flex-col">
            {/* Header mobil */}
            <header className="bg-slate-800/50 border-b border-slate-700 px-6 py-4 md:hidden backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-slate-700 p-2 rounded-lg transition-colors duration-200" />
                <h1 className="text-xl font-semibold text-white">IndustrialAI</h1>
              </div>
            </header>

            {/* Conținutul principal */}
            <div className="flex-1 overflow-auto">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
