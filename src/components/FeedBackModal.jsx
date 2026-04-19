import { useState } from "react";

function FeedbackModal() {
  const [openFeedback, setOpenFeedback] = useState(false);

  const [feedbackData, setFeedbackData] = useState({
    name: "",
    collection: "",
    message: ""
  });

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Feedback:", feedbackData);

    // 👉 Replace with API / Sheet integration if needed

    alert("Thank you for your feedback 💎");

    setFeedbackData({
      name: "",
      collection: "",
      message: ""
    });

    setOpenFeedback(false);
  };

  const isFormValid =
    feedbackData.name.trim() !== "" &&
    feedbackData.collection.trim() !== "" &&
    feedbackData.message.trim() !== "";
  
  return (
    <>
      {/* BUTTON SECTION */}
      <div className="text-center mt-10">
        <button
          onClick={() => setOpenFeedback(true)}
          className="border border-[#b28c49] text-xl sm:text-2xl px-6 py-3 font-semibold hover:bg-[#b28c49] hover:text-white transition rounded-md"
        >
          Share Feedback
        </button>
      </div>

      {/* MODAL */}
      {openFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

          <div className="relative w-full max-w-lg sm:max-w-xl bg-white rounded-lg shadow-lg">

            {/* CLOSE */}
            <button
              onClick={() => setOpenFeedback(false)}
              className="absolute top-4 right-4 text-xl text-[#5b504a]"
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="p-6 sm:p-8">

              <h3 className="text-2xl font-semibold text-[#111111] mb-6">
                Share Your Experience
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={feedbackData.name}
                  onChange={handleChange}
                  className="w-full border border-[#d6c8bd] p-3 rounded-md outline-none focus:border-[#b28c49]"
                />

                {/* COLLECTION DROPDOWN */}
                <select
                  name="collection"
                  required
                  value={feedbackData.collection}
                  onChange={handleChange}
                  className={`w-full border border-[#d6c8bd] p-3 rounded-md outline-none focus:border-[#b28c49] ${
                    feedbackData.collection === "" ? "text-[#9c8f86]" : "text-[#111]"
                  }`}
                >
                  <option value="">Select Jewellery Collection</option>
                  <option value="Temple Heritage">Temple Heritage</option>
                  <option value="Victorian Royalty">Victorian Royalty</option>
                  <option value="Indo-Western">Indo-Western</option>
                  <option value="Minimal Edit">Minimal Edit</option>
                </select>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Share your experience..."
                  value={feedbackData.message}
                  onChange={handleChange}
                  className="w-full border border-[#d6c8bd] p-3 rounded-md outline-none focus:border-[#b28c49]"
                />

                {/* ACTION BUTTONS */}
                <div className="flex gap-3 justify-end mt-4">

                  <button
                    type="button"
                    onClick={() => setOpenFeedback(false)}
                    className="px-5 py-2 border border-[#d6c8bd] rounded-md text-[#5b504a] hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`
                    px-5 py-2 rounded-md font-semibold transition
                    ${isFormValid
                        ? "bg-[#b28c49] text-white hover:bg-[#a07d3f] active:scale-95"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"}
                    `}
                  >
                    Submit Feedback
                  </button>

                </div>

              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackModal;