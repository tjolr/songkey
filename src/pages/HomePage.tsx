import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animations/animations';

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Home </h1>
    </motion.div>
  );
};

export default HomePage;
