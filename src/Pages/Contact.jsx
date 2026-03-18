import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { SiGooglecolab } from "react-icons/si";
import { IoIosCloudDone } from "react-icons/io";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

  return (
    <div className="min-h-screen bg-black text-white">

      <main className="pt-16">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-100 h-100 bg-purple-800/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-purple-900/40 border border-purple-700/50 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase">
              ✦ Get In Touch
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none mb-4">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
                Us.
              </span>
            </h1>
            <p className="text-gray-500 text-base max-w-md mx-auto">
              Any Question ? Need a Collabration? If you wants To say only Hello — We are Here .
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT — Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-700/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-700/40 flex items-center justify-center text-purple-400 text-lg mb-4">
                  <CiMail />
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest  mb-1">Email</h3>
                <p className="text-gray-400 text-sm">free@gmail.com</p>
                <p className="text-gray-600 text-xs mt-1">We Will Contact With You With-In 24*7</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-700/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-700/40 flex items-center justify-center text-purple-400 text-lg mb-4">
                  <CiTwitter/>
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest mb-1">Twitter</h3>
                <p className="text-gray-400 text-sm">free@gmail.com</p>
                <p className="text-gray-600 text-xs mt-1">Connect With Us !</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-purple-700/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-700/40 flex items-center justify-center text-purple-400 text-lg mb-4">
                  <SiGooglecolab/>
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest mb-1">Collaboration</h3>
                <p className="text-gray-400 text-sm">free@gmail.com</p>
                <p className="text-gray-600 text-xs mt-1">Guest posts & partnerships</p>
              </div>

            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-purple-700/30 rounded-2xl bg-purple-900/10">
                  <div className="text-5xl mb-4"><IoIosCloudDone className='text-purple-600'/></div>
                  <h3 className="text-white text-2xl font-black mb-2">Done</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank's for Visiting We will contact soon !
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="mt-8 px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase rounded-lg transition-all duration-200"
                  >
                    New Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold tracking-widest  text-gray-400">Naam</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Name"
                        className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold tracking-widest text-gray-400">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@gmail.com"
                        className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-widest  text-gray-400">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Any Question"
                      className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-widest text-gray-400">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Share Your Thougth's"
                      className="px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-600 focus:outline-none rounded-xl text-white text-sm placeholder-gray-600 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-widest  rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message
                      </>
                    ) : (
                      <>Share Message →</>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </section>

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