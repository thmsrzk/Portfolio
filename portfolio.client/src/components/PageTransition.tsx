"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  href: string;
  duration: number;
}

const PageTransition = ({ children, href, duration }: PageTransitionProps) => {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        router.push(href);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isExiting, duration, href, router]);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsExiting(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onClick={handleLinkClick}
      className="relative flex flex-col justify-center items-center min-h-full text-white cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;