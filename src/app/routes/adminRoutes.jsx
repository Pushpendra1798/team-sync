import Employee from "../../features/admin module/employees/ui/pages/Employee";
import Department from "../../features/admin module/departments/ui/pages/Department";
import Document from "../../features/admin module/documents/ui/pages/Document";
import Task from "../../features/admin module/tasks/ui/pages/Task";

export let adminRoutes = [
    {
        path: "/home/employee",
        element: <Employee />,
    },
    {
        path: "/home/department",
        element: <Department />,
    },
    {
        path: "/home/documents",
        element: <Document />,
    },
    {
        path: "/home/task",
        element: <Task />,
    }
]