import { Route, Routes } from 'react-router-dom'
import { Account, Chat, Contact, CreatePost, Home, MyLike, MyPost, Notification, Post, Register, Request, Sign } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sign />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/m/:id" element={<Home />}/>
      <Route path="/notification/:id" element={<Notification />}/>
      <Route path="/request/:id" element={<Request />}/>
      <Route path="/posts/:id" element={<MyPost />}/>
      <Route path="/my-likes/:id" element={<MyLike />}/>
      <Route path="/contact/:id" element={<Contact />}/>
      <Route path="/chat/:slug" element={<Chat />}/>
      <Route path="/chat/:slug/:slug" element={<Chat />}/>
      <Route path="/account/:id" element={<Account  />}/>
      <Route path="/create-post/:id" element={<CreatePost />}/>
      <Route path="/post/:id" element={<Post />}/>
    </Routes>
  )
}

export default App