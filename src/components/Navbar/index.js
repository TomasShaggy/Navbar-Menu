import React, { useState } from "react";
import "./styles/Navbar.scss";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleActive = ({}) => {
    setIsActive(!isActive);
  };

  const AnimaceNavbar = {
    hidden: {
      x: 850,
      y: -1350,
      transition: { duration: 2, ease: "easeInOut" },
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };

  const childVariants2 = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };
  const childVariants3 = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };
  const childVariants4 = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };
  const childVariants5 = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };
  const childVariants6 = {
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
    hidden: {
      x: 20,
      opacity: 0,
    },
  };
  return (
    <>
      <div className="navik bg-red-500">
        <div
          onClick={handleActive}
          className={isActive ? " navbarButton isActive" : "navbarButton"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="navbarWrapper xl:w-80 lg:w-72 md:w-72 sm:w-72 w-full">
          <motion.div
            className="navbarList grid grid-cols-2"
            variants={AnimaceNavbar}
            animate={isActive ? "show" : "hidden"}
            initial="hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div></div>
            <div className="navbarSeznam">
              <ul className="nadListItem text-center flex items-center flex-col justify-center">
                <motion.li variants={childVariants} className="listItem">
                  HOME
                </motion.li>
                <motion.li variants={childVariants2} className="listItem">
                  PRICES
                </motion.li>
                <motion.li variants={childVariants3} className="listItem">
                  CRYPTO
                </motion.li>
                <motion.li variants={childVariants4} className="listItem">
                  SWAP
                </motion.li>
                <motion.li variants={childVariants5} className="listItem">
                  PORTFOLIO
                </motion.li>
                <motion.li variants={childVariants6} className="listItem">
                  SUPPORT
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
