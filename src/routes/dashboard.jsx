// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TwoDViz from "views/TwoDViz/TwoDViz.jsx";
import ThreeDViz from "views/ThreeDViz/ThreeDViz.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Головна",
    navbarName: "Симуляції",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/2dviz",
    sidebarName: "2D",
    navbarName: "2D Симуляція",
    icon: Person,
    component: TwoDViz
  },
  {
    path: "/3dviz",
    sidebarName: "3D",
    navbarName: "3D Симуляція",
    icon: Person,
    component: ThreeDViz
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
