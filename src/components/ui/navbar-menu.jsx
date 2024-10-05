/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  const isTablet = useMediaQuery('(max-width:768px)');
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onMouseEnter={
        !isTablet
          ? () => {
              setActive(item);
              setIsOpen(false);
            }
          : undefined
      }
      onClick={isTablet ? handleToggle : undefined}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {(active !== null || isOpen) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
          key={item}
        >
          {(active === item || isOpen) && (
            <div
              className={`${
                isTablet ? 'static' : 'absolute'
              } top-[calc(100%_+_1.2rem)] left-1/2 transform ${
                !isTablet ? '-translate-x-1/2' : ''
              } pt-4`}
            >
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <div className="absolute right-0 top-[100%] w-[250px] md:w-auto md:h-auto md:static dark:bg-black h-screen">
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="flex-col gap-4 md:flex-row relative dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center gap-x-2 space-x-0 md:space-x-4 px-8 "
      >
        {children}
      </nav>
    </div>
  );
};

export const HoveredLink = ({ to = '/', children, ...rest }) => {
  return (
    <Link
      to={to}
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-white"
    >
      {children}
    </Link>
  );
};
