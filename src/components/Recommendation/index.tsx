"use client";

import { useEffect, useState } from "react";

type RecommendationProps = {
    name: string
}

const Recommendation = ({name}: RecommendationProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 40) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`fixed ${scrolled ? "top-[20px]" : "top-[105px]"} md:left-20 left-3 md:w-fit w-[95%] bg-white p-3 px-5 rounded-xl border-[1px] border-secondary z-40`}>
            <p className="text-[10px] font-light text-[#161718] mb-2">Você foi indicado por</p>
            <p className="text-xs font-bold text-primary">{name}</p>
        </div>
    )
}

export default Recommendation;