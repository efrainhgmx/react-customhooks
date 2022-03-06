import { useState, useEffect } from "react";

const onScrollHandlers = [];

window.onscroll = function () {
    onScrollHandlers.forEach((h) => h());
}