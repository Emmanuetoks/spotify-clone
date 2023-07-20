import { MouseEventHandler } from "react";

const toggleIconState: MouseEventHandler = function (this: Element) {
  const iconsToToggle = this.querySelectorAll("svg");

  iconsToToggle.forEach((icon) => icon.classList.toggle("hidden"));
};

export default toggleIconState