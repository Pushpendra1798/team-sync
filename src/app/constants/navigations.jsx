
import {
    Building,
    ChartArea,
    File,
    LayoutDashboard,
    List,
    PersonStanding,
    PersonStandingIcon,
    Presentation,
    Settings,
} from "lucide-react";

export const employeeNavigation = [
    { path: "/home", title: "Dashboard", icon: LayoutDashboard },
    { path: "/home/chat", title: "Chats", icon: ChartArea },
    { path: "/myTask", title: "My-Task", icon: List },
    { path: "/home/attendance", title: "Attendance", icon: Presentation },
    { path: "/home/profile", title: "Profile", icon: PersonStandingIcon },
    { path: "/home/settings", title: "Setting", icon: Settings },
];

export const adminNavigation = [
    { path: "/home", title: "Dashboard", icon: LayoutDashboard },
    { path: "/home/chat", title: "Chats", icon: ChartArea },
    { path: "/home/task", title: "Task", icon: List },
    { path: "/home/employee", title: "Employee", icon: PersonStanding },
    { path: "/home/documents", title: "Documents", icon: File },
    { path: "/home/department", title: "Department", icon: Building },
    { path: "/home/settings", title: "Setting", icon: Settings },
];
