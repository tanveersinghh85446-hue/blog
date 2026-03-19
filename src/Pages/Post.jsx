import React from 'react'

const POST = {
  tag: "Tech",
  title: "The Future of Web Development in 2025",
  desc: "Exploring the tools, frameworks, and philosophies reshaping how we build for the web — and what comes next.",
  image: "/The Future .jpg",
  author: "Alex Rivera",
  initial: "A",
  date: "Mar 12, 2025",
  readTime: "8 min read",
  views: "5.2K",
  content: [
    {
      id: "p1",
      type: "paragraph",
      text: "The web development landscape has never changed faster. In 2025, the tools we use, the architectures we choose, and even the way we think about building products have all shifted dramatically. This post explores what those shifts are, why they matter, and what you should be paying attention to.",
    },
    {
      id: "h1",
      type: "heading",
      text: "The Rise of Server-First Thinking",
    },
    {
      id: "p2",
      type: "paragraph",
      text: "For years, the industry moved toward putting more and more logic on the client. Single-page applications became the default. But in 2025, there's a clear reversal. Frameworks like Next.js, Remix, and SvelteKit have made server rendering not just viable but preferable for most use cases.",
    },
    {
      id: "p3",
      type: "paragraph",
      text: "The reason is simple: users expect fast, reliable experiences. Shipping less JavaScript to the browser, pre-rendering content, and keeping sensitive logic on the server are all wins that are hard to argue against.",
    },
    {
      id: "h2",
      type: "heading",
      text: "AI-Assisted Development Is Now Standard",
    },
    {
      id: "p4",
      type: "paragraph",
      text: "It would be impossible to write about web development in 2025 without talking about AI. Tools like GitHub Copilot, Cursor, and others have fundamentally changed the day-to-day workflow of developers. The debate is no longer whether to use them — it's how to use them well.",
    },
    {
      id: "p5",
      type: "paragraph",
      text: "The developers thriving right now are those who treat AI as a collaborator, not a replacement. They use it to move faster on boilerplate, to explore unfamiliar APIs, and to catch mistakes — but they remain firmly in control of architecture and decision-making.",
    },
    {
      id: "h3",
      type: "heading",
      text: "What This Means for You",
    },
    {
      id: "p6",
      type: "paragraph",
      text: "If you're building something new in 2025, the advice is straightforward: start with a server-first framework, embrace TypeScript from day one, and learn to work effectively alongside AI tools. The developers who master these three things are the ones who will ship the best products.",
    },
  ],
}

const TAG_COLORS = {
  Tech: "bg-purple-700/40 text-purple-300",
  Design: "bg-pink-900/40 text-pink-300",
  React: "bg-blue-900/40 text-blue-300",
  Career: "bg-green-900/40 text-green-300",
  AI: "bg-yellow-900/40 text-yellow-300",
  CSS: "bg-cyan-900/40 text-cyan-300",
  Performance: "bg-orange-900/40 text-orange-300",
}

const RELATED = [
  {
    id: "r1",
    tag: "React",
    title: "Understanding React Server Components",
    image: "/Understanding React .jpg",
    author: "Sam Patel",
    initial: "S",
    date: "Mar 6, 2025",
    readTime: "6 min read",
  },
  {
    id: "r2",
    tag: "AI",
    title: "LLMs Are Tools, Not Teammates",
    image: "/AI.jpg",
    author: "Jordan Lee",
    initial: "J",
    date: "Feb 27, 2025",
    readTime: "7 min read",
  },
  {
    id: "r3",
    tag: "Performance",
    title: "Web Vitals in 2025: What Actually Matters",
    image: "/Performance.jpg",
    author: "Sam Patel",
    initial: "S",
    date: "Feb 10, 2025",
    readTime: "7 min read",
  },
]

export default function Post() {
  return (
    <div className="min-h-screen bg-black text-white">

      <main className="pt-16">

        {/* HERO IMAGE */}
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src={POST.image}
            alt={POST.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-600 via-purple-400 to-transparent" />
        </div>

        {/* ARTICLE */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className={`px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full ${TAG_COLORS[POST.tag] || "bg-purple-700/40 text-purple-300"}`}>
              {POST.tag}
            </span>
            <span className="text-gray-600 text-xs">{POST.readTime}</span>
            <span className="text-gray-600 text-xs">· {POST.views} views</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
            {POST.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {POST.desc}
          </p>

          {/* Author Row */}
          <div className="flex items-center justify-between py-6 border-t border-b border-white/10 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-purple-900 flex items-center justify-center text-white font-black text-sm">
                {POST.initial}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{POST.author}</p>
                <p className="text-gray-500 text-xs">{POST.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {["Twitter", "LinkedIn", "Copy Link"].map((action) => (
                <button
                  key={action}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-700/50 text-gray-400 hover:text-white text-[11px] font-semibold tracking-widest uppercase rounded-lg transition-all duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {POST.content.map((block) => {
              if (block.type === "heading") {
                return (
                  <h2 key={block.id} className="text-2xl font-black text-white mt-4">
                    {block.text}
                  </h2>
                )
              }
              return (
                <p key={block.id} className="text-gray-400 text-base leading-relaxed">
                  {block.text}
                </p>
              )
            })}
          </div>

          {/* Tags footer */}
          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-white/10">
            <span className="text-xs text-gray-600 tracking-widest uppercase">Tagged</span>
            <span className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full ${TAG_COLORS[POST.tag] || "bg-purple-700/40 text-purple-300"}`}>
              {POST.tag}
            </span>
          </div>
        </article>

        {/* RELATED POSTS */}
        <section className="border-t border-white/10 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center gap-3 mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                Related Posts
              </p>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {RELATED.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col border border-white/10 hover:border-purple-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                    <span className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-full ${TAG_COLORS[post.tag] || "bg-purple-700/40 text-purple-300"}`}>
                      {post.tag}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="text-white font-black text-base leading-snug mb-3 group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-black text-xs flex-shrink-2">
                          {post.initial}
                        </div>
                        <p className="text-gray-400 text-xs">{post.author}</p>
                      </div>
                      <span className="text-gray-600 text-xs">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
            <div className="flex items-center gap-2 font-black tracking-widest uppercase text-white text-sm">
              Blog<span className="text-purple-500">.</span>
            </div>
            <p>© {new Date().getFullYear()} BlogApp. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {["Twitter", "GitHub", "RSS"].map((s) => (
                <a key={s} href="#" className="hover:text-purple-400 transition-colors duration-200">{s}</a>
              ))}
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}