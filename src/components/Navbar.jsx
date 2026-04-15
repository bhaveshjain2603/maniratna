import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../public/images/logo.png'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Contact', href: '/contact' }
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#d3c7bb]/70 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link to="/" className="flex flex-row items-center gap-3 text-sm md:text-lg uppercase tracking-[0.15em] text-[#1a1a1a]">
          <img src={logo} alt="MANIRATNA JEWELS" className="h-10 w-auto" />
          MANIRATNA JEWELS
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(item => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'font-semibold text-matteBlack' : 'text-[#4b4340] hover:text-matteBlack'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* <a href="mailto:hello@maniratnajewels.com" className="rounded-full border border-[#b28c49]/30 px-5 py-2 text-sm font-medium text-matteBlack transition hover:border-antiqueGold hover:text-antiqueGold">
            Inquire
          </a> */}
        </nav>
        <button
          onClick={() => setOpen(open => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d3c7bb]/60 bg-white text-matteBlack md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-[#d3c7bb]/60 bg-white/95 px-6 py-6 md:hidden">
          <div className="flex flex-col text-center gap-4">
            {navItems.map(item => (
              <NavLink
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-matteBlack' : 'text-[#5b504a] hover:text-matteBlack'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* <a
              href="mailto:hello@maniratnajewels.com"
              className="inline-flex rounded-full border border-[#b28c49]/30 px-5 py-3 text-center text-sm font-semibold text-matteBlack transition hover:border-antiqueGold hover:text-antiqueGold"
            >
              Bulk Inquiries
            </a> */}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
