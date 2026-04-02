import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  expanded: { width: "240px" },
  nonexpanded: { width: "70px" },
};

const navLinks = [
  { link: "Dashboard", icon: LayoutDashboard },
  { link: "Activity", icon: Clock4Icon },
  { link: "Analytics", icon: BarChart3Icon },
  { link: "Transactions", icon: ArrowLeftRightIcon },
  { link: "Support", icon: HelpCircleIcon },
];

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 top-0 py-10 h-screen flex flex-col border-r bg-white shadow-md z-50 ${
        isExpanded ? "px-6" : "px-2"
      }`}
    >
      {/* Toggle Button */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] hidden md:flex justify-center items-center shadow"
      >
        <img
          src={RightArrowIcon}
          className={`w-2 transition-transform ${
            !isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
  
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <img src={Logo} className="w-6" />
        {isExpanded && (
          <span className="font-semibold text-lg">Money Tracker</span>
        )}
      </div>
  
      {/* Navigation Links */}
      <div className="flex flex-col gap-4">
        {navLinks.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;
  
          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center ${
                isExpanded ? "justify-start" : "justify-center"
              } gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "bg-[#FF8C8C] text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon className="w-5 h-5" />
  
              {isExpanded && (
                <span className="text-sm font-medium">{item.link}</span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Navbar;