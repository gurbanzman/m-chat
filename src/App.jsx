import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Sign = lazy(() => import("./pages/sign/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const Notification = lazy(() => import("./pages/notification/index"));
const Request = lazy(() => import("./pages/request/index"));
const MyPost = lazy(() => import("./pages/myPost/index"));
const MyLike = lazy(() => import("./pages/myLikes/index"));
const Contact = lazy(() => import("./pages/contact/index"));
const Chat = lazy(() => import("./pages/chat/index"));
const Account = lazy(() => import("./pages/account/index"));
const CreatePost = lazy(() => import("./pages/create-post/index"));
const Post = lazy(() => import("./pages/post/index"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/m/:id" element={<Home />} />
        <Route path="/notification/:id" element={<Notification />} />
        <Route path="/request/:id" element={<Request />} />
        <Route path="/posts/:id" element={<MyPost />} />
        <Route path="/my-likes/:id" element={<MyLike />} />
        <Route path="/contact/:id" element={<Contact />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/account/:user/:id" element={<Account />} />
        <Route path="/create-post/:id" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Suspense>
  );
}

export default App;
