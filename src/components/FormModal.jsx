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

      // ✅ Dynamic subject
      data.append(
        "subject",
        type === "brochure"
          ? "Brochure Download Lead - Godrej Aveline"
          : "Site Visit Booking - Godrej Aveline"
      );

      // ✅ Track source
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

        // ✅ Download brochure ONLY if brochure
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 w-[90%] max-w-md relative"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          ✕
        </button>

        {/* ✅ Dynamic Title */}
        <h2 className="text-xl font-semibold mb-4">
          {type === "brochure" ? "Download Brochure" : "Download Brochure"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-3 rounded"
          />
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-3 rounded"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-gold text-white py-3 rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}