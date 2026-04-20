import { useState } from "react";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

function FeedbackModal() {
  
  const SHEET_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL_FEEDBACK;

  const [openFeedback, setOpenFeedback] = useState(false);

  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    businessName: "",
    collection: "",
    message: ""
  });

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

  const handleChange = (e) => {
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      const loadingToast = toast.loading("Submitting Feedback...");
  
      try {
        await fetch(SHEET_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedbackData),
        });

        toast.dismiss(loadingToast);

        toast.success("Feedback Submitted Successfully");

        setFeedbackData({
        name: "",
        email: "",
        businessName: "",
        collection: "",
        message: ""
        });

        setOpenFeedback(false); // ✅ close modal

      } catch (error) {
          toast.dismiss(loadingToast);
          console.error(error);
      
          toast.error("Submission failed. Try again.");
      }
    };

  const isFormValid =
      (feedbackData.name || "").trim() !== "" &&
      (feedbackData.email || "").trim() !== "" &&
      (feedbackData.businessName || "").trim() !== "" &&
      (feedbackData.collection || "").trim() !== "" &&
      (feedbackData.message || "").trim() !== "";
  
  return (
    <>
      {/* BUTTON SECTION */}
      <div className="text-center mt-10">
        <button
          onClick={() => setOpenFeedback(true)}
          className="border border-[#b28c49] text-xl px-6 py-3 font-semibold hover:bg-[#b28c49] hover:text-white transition rounded-md"
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

                <form onSubmit={handleSubmit} className="space-y-5">

                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={feedbackData.name}
                    onChange={handleChange}
                    required
                    sx={muiStyles}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={feedbackData.email}
                    onChange={handleChange}
                    required
                    sx={muiStyles}
                  />

                  <TextField
                    fullWidth
                    label="Business Name"
                    name="businessName"
                    value={feedbackData.businessName}
                    onChange={handleChange}
                    required
                    sx={muiStyles}
                  />

                  {/* DROPDOWN */}
                  <FormControl fullWidth required sx={{
                    textAlign: "left",
                    '& .MuiSelect-select': {
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center'
                    }
                    }}>
                    <InputLabel>Jewellery Collection</InputLabel>
                    <Select
                      name="collection"
                      value={feedbackData.collection}
                      label="Jewellery Collection"
                      onChange={handleChange}
                    >
                      <MenuItem value="">Select Collection</MenuItem>
                      <MenuItem value="Temple Heritage">Temple Heritage</MenuItem>
                      <MenuItem value="Victorian Royalty">Victorian Royalty</MenuItem>
                      <MenuItem value="Indo-Western">Indo-Western Elegance</MenuItem>
                      <MenuItem value="Minimal Edit">The Minimal Edit</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Share your experience..."
                    name="message"
                    value={feedbackData.message}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    sx={muiStyles}
                  />

                  {/* BUTTONS */}
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