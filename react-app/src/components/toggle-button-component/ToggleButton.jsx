import React, { useState, useEffect, useCallback } from "react";
/**
 * ToggleButton
 * Props:
 *  - initialOn (boolean) : starting state (default: false)
 *  - onChange (function)  : callback(newState) when toggled
 *  - disabled (boolean)   : disable the button (default: false)
 *  - ariaLabel (string)   : accessible label (default generated)
 */
const ToggleButton = ({
  initialOn = false,
  onChange,
  disabled = false,
  ariaLabel,
}) => {
  const [isOn, setIsOn] = useState(initialOn);

  // keep parent informed when initialOn prop changes
  useEffect(() => {
    setIsOn(initialOn);
  }, [initialOn]);

  const handleToggle = useCallback(() => {
    // if (disabled) return;
    setIsOn((prev) => {
      const next = !prev;
      if (typeof onChange === "function") onChange(next);
      return next;
    });
  }, [onChange]);

  const label = ariaLabel ?? (isOn ? "Turn off" : "Turn on");
  return (
    <>
      <button
        type="button"
        aria-checked={isOn}
        aria-label={label}
        onClick={handleToggle}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default ToggleButton;
