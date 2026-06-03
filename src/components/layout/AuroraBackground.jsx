import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-[-200px]
          left-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/30
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          bottom-[-250px]
          right-[-200px]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />
    </div>
  );
}

export default AuroraBackground;