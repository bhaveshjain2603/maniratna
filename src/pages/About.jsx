function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 lg:py-20">

      {/* HERO SECTION */}
      <div className="grid gap-10 text-center lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:text-left">
        
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
            About Us
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#111111] font-serifHeading">
            A legacy of elegance, handcrafted for every unforgettable moment.
          </h1>

          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-[#5b504a]">
            MANIRATNA JEWELS blends traditional artistry with modern sophistication. 
            Every piece is crafted to radiate confidence, celebrate heritage, and 
            honor your most treasured stories.
          </p>
        </div>

        {/* RIGHT: VALUE CARDS */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
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
            <div
              key={item.title}
              className="border border-[#e3d8cd] bg-[#fff8f3] p-5 sm:p-6 shadow-sm"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-[#111111]">
                {item.title}
              </h2>
              <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-[#5b504a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OUR STORY SECTION (NEW) */}
      <div className="mt-16 md:mt-20 grid gap-10 md:grid-cols-2 items-center">
        
        {/* TEXT */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
            Our Story
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#111111] font-serifHeading leading-snug">
            Where heritage inspires timeless design.
          </h2>

          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-[#5b504a]">
            At MANIRATNA JEWELS, every piece is crafted with a deep respect for tradition 
            and a vision for modern elegance.
          </p>

          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-[#5b504a]">
            Our creations are rooted in heritage artistry, reimagined through contemporary design, and perfected with an uncompromising attention to detail.
          </p>

          <p className="text-sm sm:text-base leading-7 sm:leading-8 text-[#5b504a]">
            We believe jewellery is not just an accessory — it is an expression of identity, 
            emotion, and timeless beauty.
          </p>
        </div>

        {/* IMAGE / VISUAL BLOCK */}
        <div className="h-[250px] sm:h-[300px] md:h-[400px] bg-[#f4ebe4] rounded-md flex items-center justify-center text-[#7a665c] text-sm sm:text-base">
          <img
            src="/images/about.jpg" // replace with your actual image
            alt="Maniratna Jewels craftsmanship"
            className="w-full h-full object-cover object-center transition duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="mt-16 md:mt-20 border border-[#d3c7bb]/60 bg-[#111111] p-6 sm:p-10 md:p-14 text-white shadow-sm text-center md:text-left">
        
        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight font-serifHeading">
          Our Vision & Mission
        </h2>

        <p className="mt-4 sm:mt-5 max-w-3xl mx-auto md:mx-0 text-sm sm:text-base leading-7 sm:leading-8 text-[#f4ece5]">
          We are committed to crafting jewellery that encourages choice, reflects grace, 
          and stands the test of time. A refined design philosophy, unparalleled finish, 
          and lasting relationships with clients are at the heart of everything we create.
        </p>
      </div>

    </div>
  );
}

export default About;