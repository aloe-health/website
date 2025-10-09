import { Component, createSignal, onMount } from "solid-js";
import { Motion } from "solid-motionone";
import GlowHeader from "./Header";

const BeliefCard: Component<{ title: string; description: string }> = (props) => {
  return (
    <Motion.div
      class="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div class="relative p-8 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/20 to-transparent hover:border-emerald-400/50 hover:from-emerald-800/30 transition-all duration-300 cursor-pointer">
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <div class="relative">
          <h3 class="text-xl md:text-2xl font-bold text-gray-200 mb-3 group-hover:text-white transition-colors">
            {props.title}
          </h3>
          <p class="text-gray-300 group-hover:text-gray-100 transition-colors leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>
    </Motion.div>
  );
};

const Mission: Component = () => {
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
      {/* Subtle animated background elements */}
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/6 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-3/4 left-1/3 w-48 h-48 bg-emerald-600/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 0.5s;"></div>
      </div>

      <div class="relative max-w-7xl mx-auto w-full">
        <Motion.div
          class="text-center mb-16"
          animate={isVisible() ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <GlowHeader size="lg" class="mb-6">
            Our Mission
          </GlowHeader>
          <p class="text-xl md:text-2xl text-gray-200 hover:text-white transition-colors duration-300">
            Health shouldn't depend on bad timing or chance.
          </p>
        </Motion.div>

        <Motion.div
          class="text-center mb-12"
          animate={isVisible() ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p class="text-lg md:text-xl text-gray-300 mb-8 hover:text-gray-100 transition-colors duration-300">
            These beliefs drive everything we do.
          </p>
        </Motion.div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BeliefCard
            title="Healthcare deserves the best of technology"
            description="No mission excites us more than improving and extending lives."
          />
          <BeliefCard
            title="Healthcare should be accessible"
            description="That means being affordable and always within reach."
          />
          <BeliefCard
            title="Healthcare ought to be personal and private"
            description="Everyone's health is a unique story, and they choose who gets to listen in."
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;