//This hook returns the X and Y position of Scroll in viewport

import { useState, useEffect } from "react";

const onScrollHandlers = [];

window.onscroll = function () {
    onScrollHandlers.forEach((h) => h());
};

export default function useScroll() {
    const [xOffset, setXOffset] = useState(window.pageXOffset);
    const [yOffset, setYOffset] = useState(window.pageYOffset);
    const [xDirection, setXDirection] = useState<"Left" | "Right" | "Initial">(
      "Initial"
    );
    const [yDirection, setYDirection] = useState<"Up" | "Down" | "Initial">(
      "Initial"
    ); 
    useEffect(() => {
        const handle = () => {
          setXOffset((prevXOffset) => {
            if (window.pageXOffset === 0) {
              setXDirection("Initial");
              return 0;
            }
            setXDirection(prevXOffset > window.pageXOffset ? "Left" : "Right");
            return window.pageXOffset;
          });
    
          setYOffset((prevYOffset) => {
            if (window.pageYOffset === 0) {
              setYDirection("Initial");
              return 0;
            }
            setYDirection(prevYOffset > window.pageYOffset ? "Up" : "Down");
            return window.pageYOffset;
          });
        };
        onScrollHandlers.push(handle);
        return () => {
          const handleIndex = onScrollHandlers.indexOf(handle);
          onScrollHandlers[handleIndex] = onScrollHandlers.pop();
        };
      }, []);
      
      return { 
          xOffset, 
          yOffset, 
          xDirection, 
          yDirection 
        };
    }

