function CollectionCard({ title, description, image }) {
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
      </div>
    </article>
  )
}

export default CollectionCard
