export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

export const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

export const pageVariants = {
  initial: {
    opacity: 0,
    y: '50px',
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 0.6,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};
