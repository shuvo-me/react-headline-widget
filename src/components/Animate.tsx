import { motion } from "motion/react";

import { type FC, type PropsWithChildren } from "react";

type AnimateProps = {
  type?: string;
  delay?: number;
};

const Animate: FC<AnimateProps & PropsWithChildren> = ({
  children,
  type = "fade-in",
  delay,
}) => {
  if (type === "fade-in") {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  } else if (type === "zoom-in") {
    return (
      <motion.div
        initial={{
          scale: 0.2,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }
};

export default Animate;
