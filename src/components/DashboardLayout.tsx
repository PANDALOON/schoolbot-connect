import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumb?: string;
}

export function DashboardLayout({ children, title, breadcrumb }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-[#F5F1EA] border-b border-[#C4B5A0] shadow-sm">
            <div className="flex items-center justify-between px-6 py-4">
              {/* Left side */}
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-[#8B7355]" />
                <div>
                  <h1 className="text-2xl font-playfair font-bold text-[#2C2C2C]">{title}</h1>
                  {breadcrumb && (
                    <p className="text-sm text-[#A8A595]">{breadcrumb}</p>
                  )}
                </div>
              </div>

              {/* Center - Search */}
              <div className="hidden md:block flex-1 max-w-md mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8B7355]" />
                  <Input
                    placeholder="Search users, courses, activity..."
                    className="pl-10 border-[#C4B5A0] focus:border-[#8B7355] bg-white/50"
                  />
                </div>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative text-[#8B7355] hover:bg-[#C4B5A0]/20"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
                
                <Avatar className="h-9 w-9 border-2 border-[#C4B5A0]">
                  <AvatarFallback className="bg-[#8B7355] text-[#F5F1EA]">AD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 bg-[#FAF7F2] p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
