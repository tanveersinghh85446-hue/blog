import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaTwitter, FaLinkedin, FaLink, FaArrowLeft, FaClock, FaEye } from 'react-icons/fa'
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi'

// ── Mock data ──────────────────────────────────────────────────────────────
const MOCK_POST = {
  id: 1,
  title: 'The Future of Web Development: What Comes After React?',
  subtitle: 'A deep dive into emerging frameworks, paradigms, and the shifting landscape of frontend engineering.',
  author: { name: 'Aria Voss', avatar: 'https://i.pravatar.cc/80?img=47', role: 'Senior Frontend Engineer' },
  date: 'March 14, 2026',
  readTime: '8 min read',
  views: '12.4k',
  category: 'Technology',
  tags: ['React', 'Frontend', 'Web Dev', 'JavaScript', 'Frameworks'],
  coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
  likes: 342,
  content: `
    <p>The frontend ecosystem has never stood still. From jQuery to Backbone, Angular to React — each era brought a new mental model, a new way of thinking about the relationship between data and the DOM. But as React approaches its second decade of dominance, a legitimate question emerges: <strong>what comes next?</strong></p>

    <h2>The Compiler Revolution</h2>
    <p>The most significant shift isn't a new framework — it's a new layer. Svelte pioneered the idea that a compiler, not a runtime, should bear the weight of reactivity. This idea has spread. React's own team is deep in research on the React Compiler, attempting to automatically memoize components that developers previously had to optimize by hand.</p>
    <p>The implications are profound. If the compiler can reason about your UI, it can optimize things that humans miss. Dead code elimination, automatic code-splitting, tree-shaking of component subtrees — all without changing a single line of your application code.</p>

    <h2>Islands Architecture</h2>
    <p>Astro brought the concept of "islands" to mainstream attention: a mostly-static HTML page with isolated pockets of interactivity. The idea challenges the SPA orthodoxy that everything must be a component in a giant JavaScript tree. Why ship 300kb of JS for a blog post that has one interactive widget?</p>
    <blockquote>"The best JavaScript is the JavaScript you never send." — Every performance engineer, ever.</blockquote>
    <p>This philosophy is gaining traction. Frameworks like Qwik take it further with <em>resumability</em> — the server serializes application state into the HTML, and the client picks up exactly where it left off, with zero hydration cost.</p>

    <h2>The Edge Computing Shift</h2>
    <p>Frameworks are increasingly designed around where code runs, not just how it renders. Next.js, Remix, SvelteKit — all have first-class support for edge runtimes. Your server-side logic can now execute in data centers milliseconds from your user, globally distributed by default.</p>
    <p>This changes how you architect features. Database queries that once had to hit a central server can now be proxied through edge workers that cache intelligently, reducing round-trip latency from hundreds of milliseconds to single digits.</p>

    <h2>What This Means for You</h2>
    <p>React isn't going anywhere. It has an enormous ecosystem, millions of developers, and Meta continues to invest heavily in it. But the interesting work — the edge of the frontier — is happening in the spaces between frameworks, in compiler research, in new rendering paradigms.</p>
    <p>The best thing you can do today is understand the <em>why</em> behind these patterns, not just the <em>how</em>. Why does Qwik serialize state? Why does Astro default to zero JS? The answers reveal fundamental truths about performance, user experience, and the economics of computing.</p>
    <p>The next era won't be defined by a single framework winning. It'll be defined by a set of ideas — compilability, partial hydration, edge-first rendering — becoming table stakes across all of them.</p>
  `,
}

const RELATED = [
  { id: 2, title: 'Understanding React Server Components', category: 'React', readTime: '6 min', image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&q=70' },
  { id: 3, title: 'CSS in 2026: The State of Styling', category: 'CSS', readTime: '5 min', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70' },
  { id: 4, title: 'Building Performant APIs with Hono', category: 'Backend', readTime: '7 min', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70' },
]
// ──────────────────────────────────────────────────────────────────────────

export default function SingleBlogPage() {
  const { id } = useParams()
  const post = MOCK_POST // swap with real fetch using `id`

  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLike = () => {
    setLiked(prev => !prev)
    setLikeCount(prev => liked ? prev - 1 : prev + 1)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Georgia', serif" }}>

      {/* ── Reading progress bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-purple-950">
        <div
          className="h-full bg-linear-to-r from-purple-600 to-violet-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ── Hero ── */}
      <div className="relative w-full h-[70vh] min-h-96 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-0 right-0 max-w-4xl mx-auto px-6">
          <Link
            to="/blog/1"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-purple-400 transition-colors duration-200"
          >
            <FaArrowLeft className="text-xs" />
            Back to Blog
          </Link>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 pb-12">
          <div className="mb-4">
            <span className="px-3 py-1 bg-purple-600/80 backdrop-blur text-xs font-bold tracking-widest uppercase rounded text-white">
              {post.category}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {post.subtitle}
          </p>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Author + meta bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full ring-2 ring-purple-600/60 object-cover"
            />
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-xs text-gray-500 font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <FaClock className="text-purple-500" />{post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <FaEye className="text-purple-500" />{post.views} views
            </span>
            <span className="text-gray-600">·</span>
            <span>{post.date}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 py-6">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 hover:border-purple-500/50 text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-purple-400 rounded cursor-pointer transition-all duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* ── Article body ── */}
        <article
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            // Inline styles for blog prose since we can't guarantee Tailwind @typography
            lineHeight: '1.9',
            color: '#d1d5db',
            fontSize: '1.05rem',
          }}
        />

        {/* Inline prose styles injected via style tag */}
        <style>{`
          .prose-blog p { margin-bottom: 1.5rem; }
          .prose-blog h2 {
            font-family: 'Georgia', serif;
            font-size: 1.6rem;
            font-weight: 900;
            color: #ffffff;
            margin: 2.5rem 0 1rem;
            letter-spacing: -0.02em;
          }
          .prose-blog strong { color: #e2e8f0; }
          .prose-blog em { color: #a78bfa; font-style: italic; }
          .prose-blog blockquote {
            border-left: 3px solid #7c3aed;
            padding: 1rem 1.5rem;
            margin: 2rem 0;
            background: rgba(124, 58, 237, 0.07);
            border-radius: 0 8px 8px 0;
            color: #c4b5fd;
            font-style: italic;
            font-size: 1.1rem;
          }
          .prose-blog a { color: #a78bfa; text-decoration: underline; }
          .prose-blog a:hover { color: #c4b5fd; }
        `}</style>

        {/* ── Action bar ── */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Like */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 text-sm font-semibold
              ${liked
                ? 'border-red-500/60 bg-red-500/10 text-red-400'
                : 'border-white/10 bg-white/5 text-gray-400 hover:border-red-500/40 hover:text-red-400'
              }`}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
            {likeCount.toLocaleString()} Likes
          </button>

          {/* Social share */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 tracking-widest uppercase mr-1">Share</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#1da1f2] hover:border-[#1da1f2]/40 transition-all duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#0a66c2] hover:border-[#0a66c2]/40 transition-all duration-200"
            >
              <FaLinkedin />
            </a>
            <button
              onClick={handleCopy}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-200 relative"
              title="Copy link"
            >
              <FaLink />
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-purple-700 text-white px-2 py-0.5 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            {/* Save */}
            <button
              onClick={() => setSaved(prev => !prev)}
              className={`p-2.5 rounded-full border transition-all duration-200
                ${saved
                  ? 'bg-purple-600/20 border-purple-500/60 text-purple-400'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/40 hover:text-purple-400'
                }`}
              title={saved ? 'Unsave' : 'Save'}
            >
              {saved ? <HiBookmark className="text-lg" /> : <HiOutlineBookmark className="text-lg" />}
            </button>
          </div>
        </div>

        {/* ── Author card ── */}
        <div className="mt-12 p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row gap-5 items-start">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full ring-2 ring-purple-600/50 object-cover flex-shrink-2"
          />
          <div>
            <p className="text-xs text-purple-400 font-bold tracking-widest uppercase mb-1">Written by</p>
            <h3 className="text-lg font-black text-white mb-1">{post.author.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{post.author.role} · Writes about frontend architecture, performance & developer experience.</p>
            <button className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full border border-purple-600/60 text-purple-400 hover:bg-purple-600/20 transition-all duration-200">
              Follow
            </button>
          </div>
        </div>

        {/* ── Related posts ── */}
        <div className="mt-16">
          <h2 className="text-xl font-black text-white tracking-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
            Related Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RELATED.map(rel => (
              <Link
                key={rel.id}
                to={`/blog/${rel.id}`}
                className="group rounded-xl overflow-hidden border border-white/10 hover:border-purple-600/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/40"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-purple-600/80 text-xs font-bold tracking-widest uppercase rounded text-white">
                    {rel.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-purple-300 transition-colors duration-200 mb-2">
                    {rel.title}
                  </h3>
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <FaClock className="text-purple-600 text-[10px]" />{rel.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── Footer spacer ── */}
      <div className="h-24" />
    </div>
  )
}