import { lazy } from "react";
const Home = lazy(() => import("../pages/home/home"));
const Profile = lazy(() => import("../pages/profile/profile"));
const Room = lazy(() => import("../pages/room/room"));
const Error1 = lazy(() => import("../pages/errors/404"));
const Error2 = lazy(() => import("../pages/errors/server-error"));

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/room", name: "Room", component: Room },
  { path: "/404", name: "404", component: Error1 },
  { path: "/server-error", name: "Server-Error", component: Error2 },
];
export default routes;
