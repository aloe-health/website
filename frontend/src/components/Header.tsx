import { Component } from "solid-js";
import { Motion } from "solid-motionone";

interface GlowHeaderProps {
  children: string;
  size?: "sm" | "md" | "lg" | "xl";
  class?: string;
  delay?: number;
}

const GlowHeader: Component<GlowHeaderProps> = (props) => {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-5xl",
    lg: "text-4xl md:text-6xl",
    xl: "text-5xl md:text-7xl"
  };

  return (
    <Motion.div
      class={`font-black ${sizeClasses[props.size || 'md']} ${props.class || ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay || 0, duration: 0.8 }}
    >
      <span class="bg-gradient-to-r from-emerald-500 to-emerald-300 bg-clip-text text-transparent hover:scale-[1.02] transition-transform duration-300 cursor-pointer glow-on-hover inline-block">
        {props.children}
      </span>
    </Motion.div>
  );
};

export default GlowHeader;
