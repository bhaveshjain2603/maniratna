import { useState } from "react";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

function Contact() {
  const SHEET_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    businessType: '',   // ✅ ADD THIS
    otherBusiness: '',  // ✅ ADD THIS
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Submitting enquiry...");

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      toast.success("Enquiry Submitted Successfully");

      setFormData({
        fullName: '',
        businessName: '',
        businessType: '',   // ✅ RESET THIS
        otherBusiness: '',  // ✅ RESET THIS
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      toast.dismiss(loadingToast);
      console.error(error);

      toast.error("Submission failed. Try again.");
    }
  };
  const [openModal, setOpenModal] = useState(false);

  const isFormValid =
    (formData.fullName || '').trim() !== '' &&
    (formData.businessName || '').trim() !== '' &&
    (formData.businessType || '').trim() !== '' &&
    (formData.email || '').trim() !== '' &&
    (formData.phone || '').trim() !== '' &&
    (formData.message || '').trim() !== '' &&
    (
      (formData.businessType || '').trim().toLowerCase() !== "others" ||
      (formData.otherBusiness || '').trim() !== ''
    );

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
          Whether you're a wholesaler or retailer, connect with MANIRATNA JEWELS for bespoke creations and bulk enquiries.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-10 md:grid-cols-2">

        {/* LEFT: FORM */}
        <div className="border border-[#e6d9cf] rounded-lg bg-white p-8 shadow-sm space-y-6">
          <h2 className="text-3xl font-semibold text-[#111111]">
            Business Enquiry
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              sx={muiStyles}
            />

            {/* BUSINESS NAME */}
            <TextField
              fullWidth
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              sx={muiStyles}
            />

            {/* BUSINESS TYPE DROPDOWN */}
            <FormControl fullWidth required sx={muiStyles}>
              <InputLabel>Business Type</InputLabel>
              <Select
                name="businessType"
                value={formData.businessType}
                label="Business Type"
                onChange={handleChange}
              >
                <MenuItem value="">Select Business Type</MenuItem>
                <MenuItem value="Manufacturer">Manufacturer</MenuItem>
                <MenuItem value="Wholesaler">Wholesaler</MenuItem>
                <MenuItem value="Retailer">Retailer</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>

            {/* CONDITIONAL FIELD */}
            {(formData.businessType || "").toLowerCase() === "others" && (
              <TextField
                fullWidth
                label="Please Specify Your Business"
                name="otherBusiness"
                value={formData.otherBusiness}
                onChange={handleChange}
                required
                sx={muiStyles}
              />
            )}

            {/* EMAIL */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={muiStyles}
            />

            {/* PHONE */}
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={muiStyles}
            />

            {/* MESSAGE */}
            <TextField
              fullWidth
              label="Tell us about your requirement (B2B / Bulk Order)"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              sx={muiStyles}
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`
                rounded-md w-full text-xl py-3 font-semibold transition
                ${isFormValid
                  ? "bg-[#b28c49] text-white hover:bg-[#a07d3f]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"}
              `}
            >
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
                href="https://wa.me/919845353046"
                className="block mt-2 text-lg font-semibold text-[#111]"
              >
                +91 98453 53046
              </a>
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
                Mon – Sun: 10 AM – 8 PM
              </p>
              <p className="mt-2 text-[#5b504a]">
                Tuesday Holiday
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/919448793711?text=Hello%20MANIRATNA%20JEWELS%2C%20I%20am%20interested%20in%20your%20collection."
              className="inline-flex items-center gap-2 justify-center w-full border border-[#b28c49] bg-[#25d366] text-white py-3 font-semibold hover:bg-[#128c7e] rounded-md transition"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6">

          <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden max-h-[90vh] flex flex-col">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-xl text-[#5b504a] hover:text-black"
            >
              ✕
            </button>
      
            {/* SCROLLABLE CONTENT */}
            <div className="p-6 sm:p-8 overflow-y-auto">

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#111111]">
                Business Enquiries
              </h3>
      
              <p className="text-sm sm:text-base text-[#7a665c] mb-5 leading-6">
                Partner with MANIRATNA JEWELS to access timeless collections crafted for modern retailers and premium clientele.
              </p>
      
              <ul className="space-y-2 text-sm sm:text-base text-[#5b504a] leading-6">
                <li>• Curated wholesale collections with consistent design language</li>
                <li>• Flexible bulk ordering tailored for your store requirements</li>
                <li>• Exclusive design access for select partners</li>
                <li>• Reliable nationwide supply with quality assurance</li>
                <li>• Personalized support for seamless business experience</li>
              </ul>
      
              {/* CTA */}
              <a
                href="https://wa.me/919448793711?text=Hello%20MANIRATNA%20JEWELS%2C%20I%20am%20interested%20in%20a%20business%20collaboration."
                className="flex flex-row items-center justify-center md:w-1/2 mx-auto gap-2 mt-6 sm:mt-8 text-center rounded-md border border-[#b28c49] bg-[#25d366] px-6 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#128c7e]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/> </svg>
                Start Business Conversation
              </a>
      
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const muiStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#d6c8bd",
    },
    "&:hover fieldset": {
      borderColor: "#b28c49",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b28c49",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#7a665c",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#b28c49",
  },
};

export default Contact;