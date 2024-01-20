"use client";
 
import { cn } from "../utils/cn";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
 
export const TypeWriterEffect = ({
    words,
    className,
    cursorClassName,
   }) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
      return {
        ...word,
        text: word.text.split(""),
      };
    });
    
   
 
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);
 
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    ` opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-blue-950 dark:text-white text-base xxs:font-bold lg:font-normal xxs:text-xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center xxs:leading-loose lg:leading-normal",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-16 bg-blue-500 ",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
