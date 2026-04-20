import heroMobile from '../../public/images/hero-mobile.jpg'
import heroDesktop from '../../public/images/hero-desktop.jpg'

function HeroCarousel() {

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden">

      {/* RESPONSIVE IMAGE */}
      <picture>
        {/* Mobile */}
        <source media="(max-width: 767px)" srcSet={heroMobile} />

        {/* Desktop */}
        <img
          src={heroDesktop}
          alt="MANIRATNA JEWELS"
          className="w-full h-full object-cover object-[center_30%]"
        />
      </picture>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-[#111111]/70 lg:via-[#111111]/20 lg:to-transparent" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-end lg:items-center px-6 sm:px-12 lg:px-20 pb-10 lg:pb-0">
        <div className="max-w-2xl text-white">

          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight font-serifHeading">
            Crafted to Make You Stand Out
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#f1e8dd] leading-7">
            Timeless jewellery for graceful moments — where heritage meets modern elegance.
          </p>

        </div>
      </div>

    </div>
  )
}

export default HeroCarousel