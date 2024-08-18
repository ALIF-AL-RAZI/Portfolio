import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top:  ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalStep = 1000; // Updated to 15 steps
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(1000)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.0005,
            }}
            className="h-full w-full bg-accent relative"
            
          />
        );
      })}
    </>
  );
};

export default Stairs;
