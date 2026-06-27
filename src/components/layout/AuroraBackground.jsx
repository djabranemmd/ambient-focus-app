import { motion, useReducedMotion } from "framer-motion";

function AuroraBackground() {
  const reduceMotion = useReducedMotion();

  const animationOne = reduceMotion
    ? {}
    : {
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
      };

  const animationTwo = reduceMotion
    ? {}
    : {
        x: [0, -150, 80, 0],
        y: [0, 100, -50, 0],
      };

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none select-none">
      <motion.div
        animate={animationOne}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 dark:bg-purple-600/30 blur-3xl will-change-transform transition-colors duration-500"
      />

      <motion.div
        animate={animationTwo}
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }
        }
        className="absolute bottom-[-250px] right-[-200px] h-[600px] w-[600px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/20 blur-3xl will-change-transform transition-colors duration-500"
      />
    </div>
  );
}

export default AuroraBackground;