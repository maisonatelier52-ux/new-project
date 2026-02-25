"use client";
import { useState } from "react";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  topic?: string;
  message?: string;
};

export default function   ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!form.email || !form.email.includes("@")) {
      newErrors.email = "Enter an email address like example@mysite.com.";
    }
    if (!form.topic) {
      newErrors.topic = "Choose an option.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Enter an answer.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    setIsSuccess(false);

   setTimeout(() => {
  setIsLoading(false);
  setIsSuccess(true);

  setForm({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  console.log("Form submitted", form);
}, 1000);
  };

  return (
    <section className="w-full bg-black text-white py-50 px-8 md:px-16 lg:px-24">
      <div className="mx-auto flex flex-col lg:flex-row gap-40">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-[62px] font-bold leading-none mb-8">
            Connect with our <br /> petroleum experts.
          </h2>

          <p className="text-white/90 text-[15px] leading-tight">
            Facilitating upstream exploration and midstream infrastructure
            projects through precision engineering and technical advisory.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1">
          <p className="text-white mb-6">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* First Name */}
              <div className="flex-1">
                <label className="text-sm">First name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full mt-2 bg-transparent border border-white rounded-md px-4 py-3
                    placeholder:text-white/90 focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <label className="text-sm">Last name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full mt-2 bg-transparent border border-white rounded-md px-4 py-3
                    placeholder:text-white/90 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full mt-2 bg-transparent border rounded-md px-4 py-3
                  placeholder:text-white/90 focus:outline-none
                  ${errors.email ? "border-red-500" : "border-white"}`}
              />
              {errors.email && (
                <p className="mt-2 text-red-500 text-sm">ⓘ {errors.email}</p>
              )}
            </div>

            {/* Topic */}
            <div>
              <label className="text-sm">How can we help you? *</label>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                className={`w-full mt-2 bg-transparent rounded-md px-4 py-3
                  ${errors.topic ? "border border-red-500" : "border border-white"}`}
              >
                <option value="" className="text-black">
                  Select a topic
                </option>
                <option className="text-black">Exploration</option>
                <option className="text-black">Production</option>
                <option className="text-black">Midstream</option>
                <option className="text-black">Technical Advisory</option>
              </select>
              {errors.topic && (
                <p className="mt-2 text-red-500 text-sm">ⓘ {errors.topic}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you"
                className={`w-full mt-2 bg-transparent rounded-md px-4 py-3
                  placeholder:text-white/90 focus:outline-none
                  ${errors.message ? "border border-red-500" : "border border-white"}`}
              />
              {errors.message && (
                <p className="mt-2 text-red-500 text-sm">ⓘ {errors.message}</p>
              )}
            </div>

            <div className="space-y-4">
            <button
  type="submit"
  disabled={isLoading}
  className={`w-full h-[56px] flex items-center justify-center rounded-md
    font-medium text-lg transition
    ${isLoading
      ? "bg-[#0b2a4a]/70 cursor-not-allowed"
      : "bg-[#0b2a4a] hover:bg-[#123a63]"}`}
>
  <div className="relative flex items-center justify-center">
  
    <span className={`transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}>
      Submit
    </span>

    {isLoading && (
      <span className="absolute h-6 w-6 rounded-full border-2 border-white/30 border-t-white animate-spin" />
    )}
  </div>
</button> 
              {isSuccess && (
                <p className="text-center text-white text-base">
                  Thanks, we received your submission.
                </p>
              )}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}