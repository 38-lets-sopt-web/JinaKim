import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import PostDetail from "../pages/postDetail/PostDetail";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/:postId", Component: PostDetail },
]);

export default router;
