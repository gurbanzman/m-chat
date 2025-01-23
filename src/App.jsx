import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SunspotLoaderComponent } from "./components/custom-components/loader";

const Sign = lazy(() => import("./pages/sign/index"));
const Register = lazy(() => import("./pages/register/index"));
const Home = lazy(() => import("./pages/home/index"));
const Notification = lazy(() => import("./pages/notification/index"));
const Request = lazy(() => import("./pages/request/index"));
const MyPost = lazy(() => import("./pages/myPost/index"));
const MyLike = lazy(() => import("./pages/myLikes/index"));
const Contact = lazy(() => import("./pages/contact/index"));
const Chat = lazy(() => import("./pages/chat/index"));
const Chating = lazy(() => import("./pages/chatting-text/index"));
const Account = lazy(() => import("./pages/account/index"));
const EditProfile = lazy(() => import("./pages/edit-profile/index"));
const CreatePost = lazy(() => import("./pages/create-post/index"));
const Post = lazy(() => import("./pages/post/index"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SunspotLoaderComponent />}>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/m/:slug" element={<Home />} />
          <Route path="/notification/:slug" element={<Notification />} />
          <Route path="/request/:slug" element={<Request />} />
          <Route path="/my-posts/:slug" element={<MyPost />} />
          <Route path="/my-likes/:slug" element={<MyLike />} />
          <Route path="/contact/:slug" element={<Contact />} />
          <Route path="/chat/:slug" element={<Chat />} />
          <Route path="/chat/:slug/:slug" element={<Chating />} />
          <Route path="/account/:slug" element={<Account />} />
          <Route path="/edit-profile/:slug" element={<EditProfile />} />
          <Route path="/create-post/:slug" element={<CreatePost />} />
          <Route path="/post/:slug" element={<Post />} />
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
