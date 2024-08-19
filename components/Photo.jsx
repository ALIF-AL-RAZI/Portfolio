"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute"
         >
          <Image
            src="/assets/alifphoto2.png"
            priority
            quality={100}
            fill
            alt="Your descriptive alt text here"
            className="object-contain"
          />
        </motion.div>
        <motion.svg
  className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="6.5" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <motion.circle
    cx="253"
    cy="253"
    r="250"
    stroke="#00f9"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    filter="url(#glow)"
    initial={{ strokeDasharray: "24 10 0 0" }}
    animate={{
      strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
      rotate: [120, 360],
      stroke: ["#00f9", "#00f6ff", "#00ffff"],
    }}
    transition={{
      
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
</motion.svg>

        {/* <motion.svg
            className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
            >
            <motion.circle cx="253" cy="253" r="250" stroke="#67541e" strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
            }}

            transition={{
                duration:20,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            />
        </motion.svg>    */}
      </motion.div>
    </div>
  );
};

export default Photo;
