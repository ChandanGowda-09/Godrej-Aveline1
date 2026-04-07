import { motion } from "framer-motion";
import { useState } from "react";

const WEB3FORMS_KEY = "9d40a6f7-55b3-408d-bdd8-7dbd83e7ab2b";

export default function FormModal({ onClose, type }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("access_key", WEB3FORMS_KEY);
      data.append("name", form.name);
      data.append("phone", form.phone);
      data.append("email", form.email);

      data.append(
        "subject",
        type === "brochure"
          ? "Brochure Download Lead - Godrej Aveline"
          : "Site Visit Booking - Godrej Aveline"
      );

      data.append(
        "source",
        type === "brochure" ? "Brochure Click" : "Site Visit"
      );

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        alert("Submitted successfully! Our team will contact you.");

        if (type === "brochure") {
          const link = document.createElement("a");
          link.href = "/brochure.pdf";
          link.download = "Godrej-Aveline-Brochure.pdf";
          link.click();
        }

        onClose();
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      alert("Error submitting form");
    }

    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/95 backdrop-blur-md rounded-xl p-5 w-[85%] max-w-sm shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-3 text-center">
          {type === "brochure"
            ? "Download Brochure"
            : "Book Site Visit"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="name"
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          />

          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          />

          <input
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border p-2 text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
          />

          <button
            disabled={loading}
            className="w-full bg-gold text-white py-2 text-sm rounded-md hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}