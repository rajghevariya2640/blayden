import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import theme from '../theme/Theme';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: theme.colors.white,
        pointerEvents: 'none',
          zIndex: 1000,
        mixBlendMode: 'difference'
      }}
      animate={{
        x: position.x - 10, // Offset for centering the cursor
        y: position.y - 10,
      }}
      transition={{
        type: 'tween',
        duration: 0,
        ease: 'easeInOut',
      }}
    />
  );
};

export default CustomCursor;
