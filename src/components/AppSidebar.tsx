import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Plug, 
  Users, 
  Shield, 
  Activity, 
  Settings, 
  CreditCard,
  LogOut,
  GraduationCap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Integrations", url: "/dashboard/integrations", icon: Plug },
  { title: "Users", url: "/dashboard/users", icon: Users },
  { title: "Permissions", url: "/dashboard/permissions", icon: Shield },
  { title: "Activity", url: "/dashboard/activity", icon: Activity },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
];

export function AppSidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="bg-[#2C2C2C] border-r border-[#3C3C3C]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="w-7 h-7 text-[#8B7355]" />
          <span className="text-xl font-playfair font-bold text-[#F5F1EA]">SchoolBot</span>
        </div>
        <p className="text-sm text-[#C4B5A0]">Manipal School</p>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarMenu>
          {navItems.map((item) => {
            const active = isActive(item.url);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`
                    transition-all duration-200 rounded-lg mb-1
                    ${active 
                      ? "bg-[#8B7355] text-[#F5F1EA] hover:bg-[#8B7355]/90" 
                      : "text-[#F5F1EA] hover:bg-[#C4B5A0]/20"
                    }
                  `}
                >
                  <NavLink to={item.url} className="flex items-center gap-3 px-3 py-2">
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-[#3C3C3C]">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-10 w-10 border-2 border-[#C4B5A0]">
            <AvatarFallback className="bg-[#8B7355] text-[#F5F1EA]">AD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#F5F1EA] truncate">Admin</p>
            <p className="text-xs text-[#A8A595] truncate">admin@manipal.org</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-[#F5F1EA] hover:bg-[#8B7355] hover:text-[#F5F1EA]"
          onClick={() => console.log("Logout")}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
