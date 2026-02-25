"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration,
  purpleWordsPositions = [],
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  purpleWordsPositions?: number[];
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    ).then(() => setHasAnimated(true));
  }, [scope, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` ${
                purpleWordsPositions.includes(idx)
                  ? "text-purple"
                  : "dark:text-white text-black"
              } ${hasAnimated ? "" : "opacity-0"}`}
              style={{
                filter: hasAnimated ? "none" : filter ? "blur(16px)" : "none",
                opacity: hasAnimated ? 1 : undefined,
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* SSR fallback: show text immediately so it's visible before JS hydrates */}
      <noscript>
        <div className="my-4">
          <div className="dark:text-white text-black leading-snug tracking-wide">
            {words}
          </div>
        </div>
      </noscript>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
