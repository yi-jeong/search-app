'use client'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import PostList from "./components/post/postList";

export default function Home() {
  return (
   <>
    <Header />
    <PostList />
    <Footer />
   </>
  )
}
