import { Component } from "solid-js";
import { Motion } from "solid-motionone";
import GlowHeader from "./Header";

const Hero: Component = () => {
  return (
    <section class="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden px-8 py-16">
      {/* Soft ambient glow */}
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        style="
          background:
            radial-gradient(50rem 50rem at 50% 10%, rgba(16,185,129,.3), transparent 70%),
            radial-gradient(35rem 35rem at 15% 80%, rgba(6,78,59,.4), transparent 75%),
            radial-gradient(30rem 30rem at 85% 70%, rgba(5,150,105,.3), transparent 70%),
            radial-gradient(60rem 60rem at 20% 30%, rgba(52,211,153,.15), transparent 80%);
          filter: blur(3px);
        "
      />

      {/* Additional floating green orbs */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-24 h-24 bg-emerald-300/25 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 right-1/3 w-20 h-20 bg-emerald-500/15 rounded-full blur-2xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      {/* Logo with center-bounce */}
      <Motion.div
        class="w-64 h-32 md:w-[28rem] md:h-44 group cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.9,
          easing: [0.68, -0.55, 0.265, 1.55],
        }}
      >
        <img
          src="/aloe-logo-wt-glyph.svg"
          alt="Aloe"
          class="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.25)] group-hover:drop-shadow-[0_0_50px_rgba(16,185,129,0.6)] transition-all duration-300"
        />
      </Motion.div>

      {/* Headline a bit lower */}
      <div class="mt-12">
        <GlowHeader size="md" delay={0.6}>
          the body deserves better tools
        </GlowHeader>
      </div>
    </section>
  );
};

export default Hero;