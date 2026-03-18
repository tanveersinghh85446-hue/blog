import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AddBlog from './Pages/AddBlog'
import Home from './Pages/Home'
import Post from './Pages/Post'
import SingleBlogPage from './Pages/SingleBlogPage'

export default function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addblog" element={<AddBlog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/post" element={<Post />} />
                <Route path="/blog/:id" element={<SingleBlogPage />} />
            </Routes>
        </Router>
    )
}