'use client'
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
 

   export const LampContainer = ({
    children,
    className,
   }) => {
    return (
      <div
        className={cn(
          "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 -top-20",
          className
        )}
      >
      <div className="relative flex w-full xxs:max-w-sm sm:max-w-none flex-1 xxs:scale-y-50 xs:scale-y-[2] sm:scale-y-150 md:scale-y-150 lg:scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto xxs:max-w-[300px]  sm:max-w-none right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-slate-400 via-transparent dark:from-blue-500 dark:via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] xxs:max-w-[300px]  sm:max-w-none left-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] xxs:max-w-[300px]  sm:max-w-none left-0 bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 xxs:max-w-[300px]  sm:max-w-none h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-slate-400 dark:to-blue-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute sm:w-40 h-[100%] right-0 xxs:max-w-[300px] sm:max-w-none bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-white dark:bg-slate-950 xxs:max-w-[300px] sm:max-w-none h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 xxs:h-20 sm:h-48 w-full xxs:max-w-[300px] sm:max-w-none translate-y-12 scale-x-150 bg-white dark:bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 xxs:h-32 sm:h-48 w-full  xxs:max-w-[300px] sm:max-w-none bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 xs:h-10 sm:h-36 w-[28rem] xxs:max-w-[300px] sm:max-w-none -translate-y-1/2 rounded-full bg-slate-400 dark:bg-blue-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 xxs:max-w-[300px] sm:max-w-none xxs:h-20 sm:h-36 w-64 -translate-y-[6rem] rounded-full bg-slate-300 dark:bg-blue-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 xxs:max-w-[300px] sm:max-w-none h-0.5 w-[30rem] -translate-y-[7rem] bg-slate-300 dark:bg-blue-400 "
        ></motion.div>
 
        <div className="absolute inset-auto z-40 xxs:h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-slate-950/10 "></div>
      </div>
 
      <div className="relative z-50 flex xxs:-translate-y-44 xs:-translate-y-72 xs2:-translate-y-[450px] sm:-translate-y-96 lg:-translate-y-72 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};