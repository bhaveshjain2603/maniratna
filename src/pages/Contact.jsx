import { useState } from "react";

function Contact() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">

      {/* HEADER */}
      <div className="text-center space-y-6 mb-16">
        <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c]">
          Contact Us
        </p>

        <h1 className="text-4xl sm:text-5xl font-semibold text-[#111111] font-serifHeading">
          Let’s craft something timeless together.
        </h1>

        <p className="mx-auto max-w-2xl text-[#5b504a] leading-8">
          Whether you're a retailer, or styling for a special occasion,
          connect with MANIRATNA JEWELS for bespoke creations and bulk enquiries.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-10 md:grid-cols-2">

        {/* LEFT: FORM */}
        <div className="border border-[#e6d9cf] rounded-lg bg-white p-8 shadow-sm space-y-6">
          <h2 className="text-3xl font-semibold text-[#111111]">
            Business Enquiry
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-md border border-[#d6c8bd] p-3 outline-none focus:border-[#b28c49]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-md border border-[#d6c8bd] p-3 outline-none focus:border-[#b28c49]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-md w-full border border-[#d6c8bd] p-3 outline-none focus:border-[#b28c49]"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="rounded-md w-full border border-[#d6c8bd] p-3 outline-none focus:border-[#b28c49]"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your requirement (B2B / Bulk Order)"
              className="rounded-md w-full border border-[#d6c8bd] p-3 outline-none focus:border-[#b28c49]"
            />

            <button className="rounded-md w-full border border-[#b28c49] bg-[#b28c49] text-white text-xl py-3 font-semibold hover:bg-[#a07d3f] transition">
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="space-y-6">

          {/* INFO CARD */}
          <div className="border border-[#e6d9cf] bg-[#fff8f4] p-8 space-y-6 rounded-lg shadow-sm">

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7a665c]">
                Business Email
              </p>
              <a
                href="mailto:maniratnajewels25@gmail.com"
                className="block mt-2 text-lg font-semibold text-[#111]"
              >
                maniratnajewels25@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7a665c]">
                WhatsApp
              </p>
              <a
                href="https://wa.me/919448793711"
                className="block mt-2 text-lg font-semibold text-[#111]"
              >
                +91 94487 93711
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7a665c]">
                Working Hours
              </p>
              <p className="mt-2 text-[#5b504a]">
                Mon – Sat: 10 AM – 8 PM
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/919448793711?text=Hello%20MANIRATNA%20JEWELS%2C%20I%20am%20interested%20in%20your%20collection."
              className="inline-flex items-center justify-center w-full border border-[#b28c49] bg-[#25d366] text-white py-3 font-semibold hover:bg-[#128c7e] rounded-md transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* MAP */}
          <div className="border border-[#e6d9cf] bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-[#7a665c] mb-4">
              Location
            </p>

            <div className="h-60 bg-[#f4ebe4] flex items-center justify-center text-[#7a665c]">
              Google Map Embed Here
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA (REPLACES EMERGENCY SECTION) */}
      <div className="mt-20 border border-[#e6d9cf] bg-[#f9f4ef] p-8 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-[#111111]">
          Looking for Bulk Orders or Retail Partnership?
        </h3>

        <p className="text-[#5b504a] max-w-2xl mx-auto">
          Get in touch to explore exclusive pricing.
        </p>

        <button
          onClick={() => setOpenModal(true)}
          className="mt-4 border text-lg border-[#b28c49] px-6 py-3 font-semibold hover:bg-[#b28c49] hover:text-white transition"
        >
          View Business Details
        </button>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-lg w-full shadow-lg relative">

            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-4">
              Business Enquiries
            </h3>
            <p className="text-sm text-[#7a665c] mb-6 leading-6">
              Partner with MANIRATNA JEWELS to access timeless collections crafted for modern retailers and premium clientele.
            </p>
            <ul className="space-y-2 text-[#5b504a]">
              <li>• Curated wholesale collections with consistent design language</li>
              <li>• Flexible bulk ordering tailored for your store requirements</li>
              <li>• Exclusive design access for select partners</li>
              <li>• Reliable nationwide supply with quality assurance</li>
              <li>• Personalized support for seamless business experience</li>
            </ul>

            <a
              href="https://wa.me/919448793711?text=Hello%20MANIRATNA%20JEWELS%2C%20I%20am%20interested%20in%20a%20business%20collaboration."
              className="mt-8 block text-center rounded-md border border-[#b28c49] bg-[#25d366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#128c7e]"
            >
              Start Business Conversation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;