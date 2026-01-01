import {
  Home,
  FolderOpen,
  Search,
  Settings,
  Star,
  Clock,
  HelpCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import type { ReactNode } from "react";

interface SidebarButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

function SidebarButton({
  icon,
  label,
  onClick,
  isActive = false,
}: SidebarButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isActive ? "default" : "ghost"}
            size="icon"
            className="w-12 h-12"
            onClick={onClick}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p className="font-mono">{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AppSidebar() {
  return (
    <div className="flex flex-col items-center gap-4 bg-card border border-border rounded-lg p-4 h-full">
      {/* Navigation Buttons */}
      <div className="flex flex-col items-center gap-2">
        <SidebarButton icon={<Home size={30} />} label="Home" />
        <SidebarButton icon={<FolderOpen size={30} />} label="Files" isActive />
        <SidebarButton icon={<Search size={30} />} label="Search" />
        <SidebarButton icon={<Star size={30} />} label="Favorites" />
        <SidebarButton icon={<Clock size={30} />} label="Recent" />
      </div>

      <Separator />

      {/* Settings and Help */}
      <div className="flex flex-col items-center gap-2">
        <SidebarButton icon={<Settings size={20} />} label="Settings" />
        <SidebarButton icon={<HelpCircle size={20} />} label="Help" />
      </div>

      {/* Spacer to push user info to bottom */}
      <div className="flex-1" />

      <Separator />

      {/* User Account/Avatar */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="w-12 h-12 p-0">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/crydafan.png" alt="User" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Leonardo</p>
              <p className="text-xs text-muted-foreground">
                leonardo.estacio.h@gmail.com
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
