import { Link } from "react-router-dom";

function CollectionCard({ title, description, image, buttonText, link }) {
  return (
    <article className="group overflow-hidden border border-[#d7c8bb] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-[#e9e0d7] px-6 py-6">
        <h3 className="text-lg font-semibold text-[#111111]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5b504a]">{description}</p>
        {/* CTA BUTTON */}
        <Link
          to={link}
          className="inline-block mt-2 border border-[#b28c49] px-5 py-2 text-sm font-semibold text-[#111111] hover:bg-[#b28c49] hover:text-white transition"
        >
          {buttonText}
        </Link>

        <a
          href={`https://wa.me/919448793711?text=✨ Hello MANIRATNA JEWELS,%0A%0A💎 I'm interested in ${title} 💎 — this piece caught my attention.%0A%0ACould you please share the price and details?`}
          className="bg-[#25d366] text-white px-4 py-2 text-sm font-semibold hover:bg-[#128c7e]"
        >
          Chat for Price & Details
        </a>

      </div>
    </article>
  )
}

export default CollectionCard
