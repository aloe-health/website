import { Component, createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";
import GlowHeader from "./Header";

const About: Component = () => {
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

  return (
    <section ref={sectionRef} class="relative bg-black text-white min-h-screen flex items-center justify-center px-8 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-3/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>

      <div class="relative max-w-4xl mx-auto w-full text-center">
        <Motion.div
          animate={isVisible() ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <GlowHeader size="lg" class="mb-8">
            Who are we?
          </GlowHeader>
          <p class="text-xl md:text-2xl text-gray-200 hover:text-white transition-colors duration-300 mb-12">
            We’re an early-stage startup based in Salt Lake City, UT.
          </p>

          <p class="text-lg md:text-xl text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
            Engineers. Physicists. Visionaries. Medical professionals. We're a small team working quietly to change how people experience health.
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;