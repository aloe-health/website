import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="snap-start flex items-center justify-center bg-gray-100 h-screen">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">say 'aloe</h2>
        <form className="max-w-xl mx-auto text-left" name="contact" method="POST" data-netlify="true"/*netlify-honeypot="cant-touch-this"*/ data-netlify-recaptcha="true">
          <input type="hidden" name="form-name" value="contact" />
          {/* <p class="hidden">
            <label> Don’t fill this out if you’re human:</label>
            <input name="cant-touch-this" />
          </p> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              rows="5"
              placeholder="your message"
              required
            ></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button
            type="submit"
            className="w-full bg-emerald-400 text-white py-2 rounded-lg hover:bg-emerald-500 transition"
          >
            Send message
          </button>
        </form>
        {/* <p className="my-4 px-96">this form is under construction and may not operate correctly<br/>please email us at <a className="underline" href="mailto:contact@aloe-health.tech">contact@aloe-health.tech</a> for any communication</p> */}
      </motion.div>
    </section>
  );
};

export default Contact;