import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { FaBlogger } from "react-icons/fa"
import { HiMenuAlt3, HiX } from "react-icons/hi"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Add Blog', to: '/addblog' },
        { label: 'Contact', to: '/contact' },
        { label: 'Post', to: '/post' },
        { label: 'Blog', to: '/blog/1' },
        { label: 'About', to: '/about' },
    ]

    const isActive = (to) => location.pathname === to

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${scrolled
                ? 'bg-black/95 backdrop-blur-md border-b border-purple-900/60 shadow-lg shadow-purple-950/30'
                : 'bg-black border-b border-white/5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 group"
                    >
                        <span className="text-2xl font-black tracking-widest uppercase text-white group-hover:text-purple-400 transition-colors duration-200">
                            Blog
                        </span>
                        <FaBlogger className="text-purple-500 text-xl mt-1 group-hover:text-purple-300 transition-colors duration-200" />
                    
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, to }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`relative px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 rounded group
                                    ${isActive(to)
                                        ? 'text-white bg-purple-700/20'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {label}
                                <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-purple-500 rounded-full transition-transform duration-200 origin-left
                                    ${isActive(to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                                />
                            </Link>
                        ))}

                        {/* CTA */}
                        <Link
                            to="/addblog"
                            className="ml-3 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-purple-700/40 active:scale-95"
                        >
                            + New Post
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        {menuOpen
                            ? <HiX className="text-2xl text-purple-400" />
                            : <HiMenuAlt3 className="text-2xl" />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-black border-t border-purple-900/40 px-4 py-3 flex flex-col gap-1">
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`px-4 py-3 text-sm font-semibold tracking-widest uppercase rounded transition-all duration-200
                                ${isActive(to)
                                    ? 'text-white bg-purple-700/30 border-l-2 border-purple-500'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/addblog"
                        className="mt-2 px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold tracking-widest uppercase rounded text-center transition-all duration-200"
                    >
                        + New Post
                    </Link>
                </div>
            </div>
        </nav>
    )
}