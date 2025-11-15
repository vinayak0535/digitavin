"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

   useEffect(() => {
    // Ensure component is mounted and ref is attached
    setIsMounted(true);
    
    // Force a small scroll to initialize the scroll detection
    if (ref.current) {
      const scrollContainer = ref.current;
      const currentScroll = scrollContainer.scrollTop;
      scrollContainer.scrollTop = currentScroll + 1;
      scrollContainer.scrollTop = currentScroll;
    }
  }, [ref.current]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });


  const linearGradients = [
    "linear-gradient(to bottom right, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))",
    "linear-gradient(to bottom right, hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.2))",
    "linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--glow) / 0.3))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="h-[36rem] overflow-y-auto flex justify-center relative gap-10 rounded-2xl p-10 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent bg-background"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className="space-y-6 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50"
              >
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {item.title}
                </span>
                <p className="text-foreground/90 text-base leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[420px] w-[520px] xl:h-[520px] xl:w-[600px] rounded-2xl sticky top-10 overflow-hidden border border-border/50 shadow-2xl",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            opacity: { duration: 0.5 }
          }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
