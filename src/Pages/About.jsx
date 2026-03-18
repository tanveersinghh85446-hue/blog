import React from 'react'
import { FaBlogger, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineLightningBolt, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Articles Published', value: '128' },
  { label: 'Monthly Readers', value: '24K' },
  { label: 'Topics Covered', value: '40+' },
  { label: 'Years Running', value: '5' },
]

const values = [
  {
    icon: <HiOutlineLightningBolt className="text-2xl text-purple-400" />,
    title: 'Sharp & Concise',
    desc: 'Every post is written to deliver maximum insight with zero fluff. Your time matters.',
  },
  {
    icon: <HiOutlineSparkles className="text-2xl text-purple-400" />,
    title: 'Original Thinking',
    desc: 'No recycled takes. We dig deep into topics that actually move the needle.',
  },
  {
    icon: <HiOutlineGlobe className="text-2xl text-purple-400" />,
    title: 'Built for Everyone',
    desc: 'Whether you\'re a beginner or a veteran, there\'s something here for you.',
  },
]

const team = [
  { name: 'Alex Rivera', role: 'Founder & Editor', initial: 'A' },
  { name: 'Jordan Lee',  role: 'Lead Writer',      initial: 'J' },
  { name: 'Sam Patel',   role: 'Tech Contributor', initial: 'S' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">

      {/* Hero */}
      <section className="relative border-b border-white/10 overflow-hidden">
        {/* purple glow blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-130 h-120 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-purple-900/40 border border-purple-700/50 rounded-full text-purple-300 text-xs font-semibold tracking-widest uppercase">
            <FaBlogger /> About Us
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            We Write.{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-purple-600">
              You Learn.
            </span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            A no-nonsense blog built for curious minds. We cover tech, design, and ideas
            that shape the modern world — written by people who actually care.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              to="/blog/1"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-widest uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95"
            >
              Read the Blog
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold tracking-widest uppercase rounded transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-purple-400">
                {value}
              </p>
              <p className="mt-2 text-xs text-gray-500 font-semibold tracking-widest uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
            What We Stand For
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black mb-12">Our Values</h3>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 hover:bg-purple-900/20 border border-white/10 hover:border-purple-700/50 rounded-xl transition-all duration-300"
              >
                <div className="mb-4 w-10 h-10 flex items-center justify-center bg-purple-900/40 rounded-lg">
                  {icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-3">
            The People
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black mb-12">Meet the Team</h3>

          <div className="grid sm:grid-cols-3 gap-6">
            {team.map(({ name, role, initial }) => (
              <div
                key={name}
                className="flex items-center gap-4 p-5  border border-white/10 hover:border-purple-700/50 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex-shrink-2 rounded-full bg-linear-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-black text-lg">
                  {initial}
                </div>
                <div>
                  <p className="text-white font-bold">{name}</p>
                  <p className="text-gray-500 text-xs tracking-wide">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Strip */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Got something to say?</h3>
            <p className="text-gray-500 text-sm mt-1">We're always looking for great contributors.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200"><FaTwitter className="text-xl" /></a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200"><FaGithub className="text-xl" /></a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-200"><FaLinkedin className="text-xl" /></a>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}