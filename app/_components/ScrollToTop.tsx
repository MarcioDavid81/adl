"use client"

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    return ( 
        <div>
            {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-[#E6B325] hover:bg-[#E6B325]/90 text-[#1E3B39] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50 !rounded-button cursor-pointer whitespace-nowrap"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          )}
        </div>
     );
}
 
export default ScrollToTop;