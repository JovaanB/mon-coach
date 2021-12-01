import {
  ArticleOutlined,
  CalendarTodayOutlined,
  PeopleOutlined,
  ShoppingBagOutlined,
  List,
  FitnessCenter,
} from "@mui/icons-material";

const sidebarConfig = [
  {
    title: "planning",
    path: "/dashboard/planning",
    icon: <CalendarTodayOutlined />,
  },
  {
    title: "athlètes",
    path: "/dashboard/athletes",
    icon: <PeopleOutlined />,
  },
  {
    title: "séances",
    path: "/dashboard/seances",
    icon: <FitnessCenter />,
  },
  {
    title: "entrainements",
    path: "/dashboard/trainings",
    icon: <List />,
  },
  {
    title: "blog",
    path: "/dashboard/blog",
    icon: <ArticleOutlined />,
  },
  {
    title: "produits",
    path: "/dashboard/products",
    icon: <ShoppingBagOutlined />,
  },
];

export default sidebarConfig;
