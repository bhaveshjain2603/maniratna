import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Contact', href: '/contact' }
]

function Footer() {
  return (
    <footer className="border-t border-[#d3c7bb]/50 bg-white/90 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#1a1a1a]">MANIRATNA JEWELS</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#4d443f]">
              A heritage of craftsmanship, a commitment to timeless beauty, and jewellery designed to become the defining detail of your most cherished moments.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]">Explore</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#5b504a]">
                {links.map(item => (
                  <Link key={item.label} to={item.href} className="transition hover:text-matteBlack">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]">Connect</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[#5b504a]">
                <a href="mailto:maniratnajewels25@gmail.com" className="transition hover:text-matteBlack">Email</a>
                <a href="https://wa.me/919448793711" className="transition hover:text-matteBlack">WhatsApp</a>
                <a href="https://instagram.com/maniratna_jewels25" target='blank' className="transition hover:text-matteBlack">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-[#7a6b62]">© 2026 MANIRATNA JEWELS. Jewels Rooted In Culture, Styled For You.</p>
      </div>
    </footer>
  )
}

export default Footer
