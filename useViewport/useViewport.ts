//This hook returns the screen size if this is changed
import { useState, useEffect } from "react";

const getViewport  = () => {
    const viewPortWidth = document.getElementsByTagName("html")[0].offsetWidth;

    if(viewPortWidth < 768) return "phone";

    if(viewPortWidth < 992) return "tablet";

    if(viewPortWidth < 1200) return "desktop";

    return "largeDesktop";
};

