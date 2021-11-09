import {
  ArticleOutlined,
  CalendarTodayOutlined,
  DashboardOutlined,
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
    icon: <ArticleOutlined />,
  },
];

export default sidebarConfig;
