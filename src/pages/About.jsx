function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:py-20">
      <div className="grid gap-12 text-center lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">About Us</p>
          <h1 className="text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl font-serifHeading">
            A legacy of elegance, handcrafted for every unforgettable moment.
          </h1>
          <p className="text-base leading-8 text-[#5b504a]">
            MANIRATNA JEWELS blends traditional artistry with modern sophistication. Every piece is crafted to radiate confidence, celebrate heritage, and honor your most treasured stories.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              title: 'Handcrafted Quality',
              description: 'Meticulous design executed by expert artisans using premium materials.'
            },
            {
              title: 'Attention to Detail',
              description: 'Every curve, cut, and finish is refined to deliver a luxurious experience.'
            },
            {
              title: 'Traditional + Modern',
              description: 'Beautifully balancing heritage motifs with contemporary silhouettes.'
            },
            {
              title: 'Trusted for Generations',
              description: 'A premium brand voice built on discretion, excellence, and enduring trust.'
            }
          ].map(item => (
            <div key={item.title} className="border border-[#e3d8cd] bg-[#fff8f3] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#111111]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5b504a]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border border-[#d3c7bb]/60 bg-[#111111] p-10 text-white shadow-sm sm:p-14">
        <h2 className="text-3xl font-semibold leading-tight font-serifHeading">Our Vision & Mission</h2>
        <p className="mt-5 max-w-3xl leading-8 text-[#f4ece5]">
          We are committed to crafting jewellery that encourages choice, reflects grace, and stands the test of time. A refined design philosophy, unparalleled finish, and lasting relationships with clients are at the heart of everything we create.
        </p>
      </div>
    </div>
  )
}

export default About
