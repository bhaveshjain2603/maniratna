import { Link } from "react-router-dom";

function CollectionCard({ title, description, image, buttonText, link, type }) {

  const getWhatsAppMessage = () => {
    const base = "✨ Hello MANIRATNA JEWELS,";

    switch (type) {
      case "temple":
        return `${base}%0A%0A🙏 I was exploring your Temple Jewellery collection and the traditional craftsmanship truly caught my attention 💎.%0A%0AI would love to know more about pricing, designs, and availability.%0A%0ALooking forward to your response.`;

      case "victorian":
        return `${base}%0A%0A👑 I came across your Victorian collection and absolutely loved the royal elegance and antique finish 👑.%0A%0ACould you please share the price and more details about these designs?`;

      case "indo":
        return `${base}%0A%0A💫 Your Indo-Western collection feels so unique and versatile — it instantly caught my attention 💎.%0A%0AI would love to know more about pricing and available designs.`;

      case "minimal":
        return `${base}%0A%0A🌿 I really liked your Minimal collection — elegant, subtle, and perfect for everyday wear 💎.%0A%0ACould you share pricing and details for these pieces?`;

      default:
        return `${base}%0A%0A💎 I'm interested in ${title} — this piece caught my attention. Could you please share the price and details?`;
    }
  };

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
        <div className="flex flex-col gap-3 mt-4">

          {/* VIEW COLLECTION */}
          <Link
            to={link}
            className="flex-1 text-center border border-[#b28c49] px-5 py-2 text-sm font-semibold text-[#111111] hover:bg-[#b28c49] hover:text-white transition rounded-md"
          >
            {buttonText}
          </Link>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/919448793711?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center border bg-[#b28c49] text-white justify-center gap-2 px-4 py-2 text-sm font-semibold transition rounded-md"
          >
            Chat for Price & Details
          </a>

        </div>
      </div>
    </article>
  )
}

export default CollectionCard
