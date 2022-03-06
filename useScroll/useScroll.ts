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