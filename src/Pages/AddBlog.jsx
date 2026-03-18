import React, { useState } from 'react'

const TAGS = ["Tech", "Design", "React", "Career", "AI", "CSS", "Performance"]

const TAG_COLORS = {
  Tech: "bg-purple-700/40 text-purple-300 border-purple-700/50",
  Design: "bg-pink-900/40 text-pink-300 border-pink-700/50",
  React: "bg-blue-900/40 text-blue-300 border-blue-700/50",
  Career: "bg-green-900/40 text-green-300 border-green-700/50",
  AI: "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
  CSS: "bg-cyan-900/40 text-cyan-300 border-cyan-700/50",
  Performance: "bg-orange-900/40 text-orange-300 border-orange-700/50",
}

export default function AddBlog() {
  const [form, setForm] = useState({
    title: '',
    desc: '',
    content: '',
    author: '',
    tag: '',
    image: '',
    readTime: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleReset = () => {
    setSubmitted(false)
    setPreview(false)
    setForm({ title: '', desc: '', content: '', author: '', tag: '', image: '', readTime: '' })
  }

  const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <div className="min-h-screen bg-black text-white">

      <main className="pt-16">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-60 h-40 bg-purple-800/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-purple-900/40 border border-purple-700/50 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase">
                  ✦ New Post
                </div>
                <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
                  Write a{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
                    Story.
                  </span>
                </h1>
                <p className="text-gray-500 mt-3 text-base max-w-md">
                  Write your new blog post — share your knowledge with the world.
                </p>
              </div>

              {/* Preview toggle */}
              {!submitted && (
                <button
                  onClick={() => setPreview(!preview)}
                  className={`flex items-center gap-2 px-5 py-2.5 border text-xs font-bold tracking-widest uppercase rounded-xl transition-all duration-200
                    ${preview
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-purple-700/50'
                    }`}
                >
                  {preview ? '✏️ Edit Mode' : '👁 Preview'}
                </button>
              )}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* SUCCESS STATE */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-24 border border-purple-700/30 rounded-2xl bg-purple-900/10">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-white text-3xl font-black mb-2">Post Published!</h3>
              <p className="text-gray-500 text-sm max-w-xs mb-8">
                Your blog post has been successfully submitted.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-all duration-200"
                >
                  + Write New Post
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-all duration-200"
                >
                  View Blog →
                </button>
              </div>
            </div>
          ) : preview ? (
            /* ── PREVIEW MODE ── */
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 flex items-center gap-2">
                <span className="text-xs text-gray-600 tracking-widest uppercase">Preview</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Preview Card */}
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* Image */}
                {form.image ? (
                  <div className="relative h-72 overflow-hidden">
                    <img src={form.image} alt="preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                    {form.tag && (
                      <span className={`absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border ${TAG_COLORS[form.tag] || 'bg-purple-700/40 text-purple-300 border-purple-700/50'}`}>
                        {form.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-48 bg-purple-900/20 border-b border-white/10 flex items-center justify-center text-gray-600 text-sm">
                    No image provided — your cover image will appear here
                  </div>
                )}

                <div className="p-8">
                  <h2 className="text-3xl font-black text-white leading-tight mb-3">
                    {form.title || <span className="text-gray-600">Your title will appear here...</span>}
                  </h2>
                  <p className="text-gray-400 text-base mb-6">
                    {form.desc || <span className="text-gray-600">Your description will appear here...</span>}
                  </p>
                  <div className="h-px bg-white/10 mb-6" />
                  <p className="text-gray-500 text-sm whitespace-pre-wrap leading-relaxed">
                    {form.content || <span className="text-gray-600">Your content will appear here...</span>}
                  </p>
                  <div className="h-px bg-white/10 mt-6 mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-purple-900 flex items-center justify-center text-white font-black text-sm">
                        {form.author ? form.author[0].toUpperCase() : 'A'}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">{form.author || 'Author'}</p>
                        <p className="text-gray-500 text-xs">{today} · {form.readTime || '? min read'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── FORM MODE ── */
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left — Main Fields */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                {/* Title */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Post Title <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="Write a compelling title..."
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Short Description <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="desc"
                    value={form.desc}
                    onChange={handleChange}
                    required
                    placeholder="A brief summary of your post in 2-3 lines..."
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Content <span className="text-purple-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    required
                    rows={12}
                    placeholder="Write your full blog content here..."
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200 resize-none leading-relaxed"
                  />
                  <p className="text-gray-600 text-xs text-right">{form.content.length} characters</p>
                </div>

              </div>

              {/* Right — Meta Fields */}
              <div className="flex flex-col gap-5">

                {/* Publish button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    <>🚀 Publish</>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-gray-600 text-xs tracking-widest">POST DETAILS</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* Author */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Author <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                  />
                </div>

                {/* Tag */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Tag / Category <span className="text-purple-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, tag: t })}
                        className={`px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full border transition-all duration-200
                          ${form.tag === t
                            ? TAG_COLORS[t] || 'bg-purple-700/40 text-purple-300 border-purple-700/50'
                            : 'bg-white/5 text-gray-500 border-white/10 hover:text-white hover:border-white/20'
                          }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Image URL */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Cover Image Path
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="/myimage.jpg"
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                  />
                  {form.image && (
                    <img
                      src={form.image}
                      alt="cover preview"
                      className="w-full h-32 object-cover rounded-lg border border-white/10 mt-1"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                </div>

                {/* Read Time */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                    Read Time
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    value={form.readTime}
                    onChange={handleChange}
                    placeholder="5 min read"
                    className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                  />
                </div>

                {/* Info box */}
                <div className="p-4 rounded-xl border border-purple-700/30 bg-purple-900/10 text-purple-300 text-xs leading-relaxed">
                  <p className="font-bold mb-1 tracking-widest uppercase">💡 Tip</p>
                  <p className="text-purple-400">
                    Use the Preview button to see how your post looks before publishing!
                  </p>
                </div>

              </div>
            </form>
          )}
        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/10 mt-8">
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