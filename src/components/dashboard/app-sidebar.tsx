"use client";

import { BanknoteArrowUp, Bot, BrainCog, Presentation } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { NavMain } from "./nav-main";
import { SidebarUpgrade } from "./upgrade";
import { NavUser } from "./nav-user";

const sidebarLinks = {
  navMain: [
    {
      title: "Meetings",
      url: "/dashboard/meetings",
      icon: Presentation,
    },
    {
      title: "Agents",
      url: "/dashboard/agents",
      icon: Bot,
    },
  ],
  secondary: [
    {
      title: "Upgrade",
      url: "/dashboard/upgrade",
      icon: BanknoteArrowUp,
    },
  ],
};

const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <BrainCog className="!size-5" />
                <span className="text-base font-semibold">VA-AI</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks.navMain} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter className="gap-y-6">
        <SidebarUpgrade item={sidebarLinks.secondary[0]} />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
};
export default AppSidebar;
