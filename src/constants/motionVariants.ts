export const accordionVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4 },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4 },
      opacity: { duration: 0.2 },
    },
  },
};

export const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      // ,
    },
  },
};

export const containerVariants2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

export const cardVariants2 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export const submenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

export const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};
