import { Component, createSignal, onMount } from "solid-js";
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

  const [isVisible, setIsVisible] = createSignal(false);
  let sectionRef!: HTMLDivElement;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }
  });

  const handleSubmit = () => {
    // Form will be handled by Netlify - no preventDefault needed
    console.log("Form submitted:", formData());
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={sectionRef} class="bg-black text-white min-h-screen flex items-center justify-center px-8 py-16 relative overflow-hidden">
      {/* subtle moving gradient stripe */}
      <div
        class="pointer-events-none absolute -inset-x-10 -bottom-24 h-56 opacity-50 bg-gradient-animate"
        style="
          background-image: linear-gradient(90deg, rgba(16,185,129,.2), rgba(6,78,59,.4), rgba(16,185,129,.2));
          mask-image: radial-gradient(60% 100% at 50% 100%, black 55%, transparent 85%);
        "
      />

      {/* Additional green background elements */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/3 left-1/4 w-48 h-48 bg-emerald-300/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
      </div>
      <Motion.div
        class="max-w-2xl mx-auto text-center w-full"
        animate={isVisible() ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h2 class="text-4xl md:text-5xl font-black mb-8 text-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer glow-on-hover">
          Say 'aloe
        </h2>
        <p class="text-gray-300 text-lg mb-12 hover:text-emerald-300 transition-colors duration-300 cursor-pointer">
          Partners, investors, patients, engineers, we'd love to chat. Reach out anytime.
        </p>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-recaptcha="true"
          action="/success"
          class="space-y-6"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div class="text-left group">
            <input
              type="text"
              name="name"
              class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 hover:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-800"
              placeholder="Your name"
              required
              value={formData().name}
              onInput={(e) => handleInputChange("name", e.target.value)}
            />
          </div>

          <div class="text-left group">
            <input
              type="email"
              name="email"
              class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 hover:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-800"
              placeholder="Your email"
              required
              value={formData().email}
              onInput={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div class="text-left group">
            <textarea
              name="message"
              class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 hover:border-emerald-500 transition-all duration-300 text-white placeholder-gray-400 resize-none hover:bg-gray-800"
              rows="5"
              placeholder="Your message"
              required
              value={formData().message}
              onInput={(e) => handleInputChange("message", e.target.value)}
            />
          </div>

          <button
            type="submit"
            class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </Motion.div>
    </section>
  );
};

export default Contact;