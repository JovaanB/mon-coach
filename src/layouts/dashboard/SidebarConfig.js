import {
  AddAlertOutlined,
  AddTaskOutlined,
  AppBlockingOutlined,
  CalendarTodayOutlined,
  DashboardOutlined,
  LockOutlined,
  PeopleOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: <DashboardOutlined />,
  },
  {
    title: "planning",
    path: "/dashboard/planning",
    icon: <CalendarTodayOutlined />,
  },
  {
    title: "clients",
    path: "/dashboard/user",
    icon: <PeopleOutlined />,
  },
  {
    title: "produits",
    path: "/dashboard/products",
    icon: <ShoppingBagOutlined />,
  },
  {
    title: "blog",
    path: "/dashboard/blog",
    icon: <AppBlockingOutlined />,
  },
  {
    title: "connexion",
    path: "/login",
    icon: <LockOutlined />,
  },
  {
    title: "deconnexion",
    path: "/register",
    icon: <AddTaskOutlined />,
  },
  {
    title: "Erreur 404",
    path: "/404",
    icon: <AddAlertOutlined />,
  },
];

export default sidebarConfig;
