/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Contact component with form and Netlify integration for Aloe frontend
*/

import { Component, createSignal } from "solid-js";
import { Motion } from "solid-motionone";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: Component = () => {
  const [formData, setFormData] = createSignal<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    // Form will be handled by Netlify - no preventDefault needed
    console.log("Form submitted:", formData());
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section class="snap-start flex items-center justify-center bg-gray-100 h-screen">
      <Motion.div
        class="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 class="text-4xl font-bold text-center mb-6">say 'aloe</h2>
        <form
          class="max-w-xl mx-auto text-left"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="your name"
              required
              value={formData().name}
              onInput={(e) => handleInputChange("name", e.currentTarget.value)}
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="your email"
              required
              value={formData().email}
              onInput={(e) => handleInputChange("email", e.currentTarget.value)}
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              rows="5"
              placeholder="your message"
              required
              value={formData().message}
              onInput={(e) =>
                handleInputChange("message", e.currentTarget.value)
              }
            />
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button
            type="submit"
            class="w-full bg-emerald-400 text-white py-2 rounded-lg hover:bg-emerald-500 transition"
          >
            Send message
          </button>
        </form>
      </Motion.div>
    </section>
  );
};

export default Contact;
