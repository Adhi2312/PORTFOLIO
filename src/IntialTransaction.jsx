// InitialTransition.jsx
import { motion } from "framer-motion";

const blackBox = {
  initial: { height: "100vh", bottom: 0 },
  animate: {
    height: 0,
    transition: { duration: 1.2, ease: [0.87, 0, 0.13, 1] },
  },
};

export const InitialTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
    />
  );
};

