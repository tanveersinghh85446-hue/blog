import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBlogger, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa'
import { HiOutlineSparkles, HiOutlineFire, HiOutlineBookOpen, HiOutlineTrendingUp } from 'react-icons/hi'

const featured = {
  tag: 'Featured',
  title: 'The Future of Web Development in 2025',
  desc: 'Exploring the tools, frameworks, and philosophies reshaping how we build for the web — and what comes next.',
  author: 'Alex Rivera',
  date: 'Mar 12, 2025',
  readTime: '8 min read',
  initial: 'A',
}

const posts = [
  {
    tag: 'Design',
    title: 'Why Brutalism is Back in UI',
    desc: 'Raw grids, stark contrast, and zero decoration — the anti-aesthetic is having a moment.',
    author: 'Vinay Kumar',
    date: 'Mar 9, 2025',
    readTime: '5 min read',
    initial: 'J',
  },
  {
    tag: 'Tech',
    title: 'Understanding React Server Components',
    desc: 'A practical breakdown of RSC, when to use them, and what they actually change.',
    author: 'Saim Patel',
    date: 'Mar 6, 2025',
    readTime: '6 min read',
    initial: 'S',
  },
  {
    tag: 'Career',
    title: 'How to Write Code Others Love to Read',
    desc: 'Naming, structure, and the small choices that separate good code from great code.',
    author: 'Arpit Bala',
    date: 'Mar 2, 2025',
    readTime: '4 min read',
    initial: 'A',
  },
  {
    tag: 'AI',
    title: 'LLMs Are Tools, Not Teammates',
    desc: 'The case for keeping humans in the loop — and knowing exactly when to hand off.',
    author: 'Rohit Kumar',
    date: 'Feb 27, 2025',
    readTime: '7 min read',
    initial: 'J',
  },
]

const categories = [
  { label: 'Trending', icon: <HiOutlineFire /> },
  { label: 'Design', icon: <HiOutlineSparkles /> },
  { label: 'Tech', icon: <HiOutlineTrendingUp /> },
  { label: 'Reading', icon: <HiOutlineBookOpen /> },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeTag, setActiveTag] = useState('Trending')

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); setEmail('') }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Glow blobs */}
        <div className="absolute -top-40 -left-40 w-170 h-120 bg-purple-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-150 h-100 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left copy */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-purple-900/40 border border-purple-700/50 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase">
                <FaBlogger /> Welcome to the Blog
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
                Ideas Worth{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
                  Reading.
                </span>
              </h1>

              <p className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
                Deep dives into tech, design, and the ideas shaping tomorrow.
                No filler. No fluff. Just signal.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  to="/blog/1"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-widest uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95"
                >
                  Start Reading <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  to="/addblog"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold tracking-widest uppercase rounded transition-all duration-200"
                >
                  + Write a Post
                </Link>
              </div>
            </div>

            {/* Right — featured card */}
            <div className="flex-1 w-full max-w-md">
              <Link to="/blog/1">
                <div className="group relative p-6  hover:bg-purple-900/20 border border-white/10 hover:border-purple-600/50 rounded-2xl transition-all duration-300 cursor-pointer">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-6 right-6  bg-linear-to-r from-purple-600 to-transparent rounded-b-full" />

                  <span className="inline-block px-2 py-0.5 mb-4 bg-purple-700/40 text-purple-300 text-[10px] font-bold tracking-widest uppercase rounded">
                    {featured.tag}
                  </span>
                  <h2 className="text-xl font-black leading-snug mb-3 group-hover:text-purple-300 transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.desc}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-black text-sm">
                        {featured.initial}
                      </div>
                      <div>
                        <p className="text-white text-xs font-semibold">{featured.author}</p>
                        <p className="text-gray-600 text-[10px]">{featured.date}</p>
                      </div>
                    </div>
                    <span className="text-gray-600 text-xs">{featured.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ───────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => setActiveTag(label)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-full whitespace-nowrap transition-all duration-200
                ${activeTag === label
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-800/40'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── POSTS GRID ───────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-1">Latest</p>
              <h2 className="text-3xl font-black">Recent Posts</h2>
            </div>
            <Link
              to="/blog/1"
              className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-purple-400 text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              View all <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.title} to="/blog/1">
                <div className="group h-full p-6 hover:bg-purple-900/20 border border-white/10 hover:border-purple-700/50 rounded-xl transition-all duration-300 flex flex-col">
                  <span className="inline-block px-2 py-0.5 mb-4 bg-purple-900/50 text-purple-300 text-[10px] font-bold tracking-widest uppercase rounded w-fit">
                    {post.tag}
                  </span>
                  <h3 className="text-white font-black text-lg leading-snug mb-2 group-hover:text-purple-300 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.desc}</p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-black text-xs">
                        {post.initial}
                      </div>
                      <span className="text-gray-500 text-xs">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-xs">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────── */}
      <section className="border-b border-white/10">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-purple-900/40 border border-purple-700/50 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase">
            <HiOutlineSparkles /> Newsletter
          </div>
          <h2 className="text-4xl font-black mb-4">
            Stay in the{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
              Loop.
            </span>
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            New posts, no spam. Drop your email and we'll do the rest.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
        <div className="flex items-center gap-2 font-black tracking-widest uppercase text-white">
          Blog <FaBlogger className="text-purple-500" />
        </div>
        <p>© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-purple-400 transition-colors duration-200"><FaTwitter className="text-base" /></a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-200"><FaGithub className="text-base" /></a>
        </div>
      </footer>

    </div>
  )
}