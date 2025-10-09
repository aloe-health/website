import { Component } from "solid-js";
import { Motion } from "solid-motionone";

const Footer: Component = () => {
  return (
    <footer class="relative bg-black text-gray-400 text-center py-16 px-8 border-t border-emerald-900/30 overflow-hidden">
      {/* Subtle background elements */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute top-0 left-1/4 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
        <div class="absolute top-0 right-1/4 w-24 h-24 bg-emerald-400/5 rounded-full blur-2xl"></div>
      </div>

      <Motion.div
        class="relative max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p class="text-lg hover:text-emerald-300 transition-colors duration-300 cursor-pointer hover-glow">
          © {new Date().getFullYear()} Aloe Health, LLC
        </p>
        <p class="text-sm text-gray-500 mt-2 hover:text-gray-400 transition-colors duration-300">
          Building better tools for the body
        </p>
      </Motion.div>
    </footer>
  );
};

export default Footer;