export const delayChildrenParent = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const delayChildrenChild = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

export const pageVariants = {
  initial: {
    opacity: 0,
    y: '20px',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};
