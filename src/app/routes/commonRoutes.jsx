
import DashboardContent from "../../features/dashboard/ui/pages/DashboardContent";
import Setting from "../../features/settings/ui/pages/Setting";
import Chats from "../../features/chats/ui/pages/Chats";

export const commonRoutes = [
    {
        index: true,
        element: <DashboardContent />,
    },
    {
        path: "chat",
        element: <Chats />,
    },
    {
        path: "settings",
        element: <Setting />,
    },
];
