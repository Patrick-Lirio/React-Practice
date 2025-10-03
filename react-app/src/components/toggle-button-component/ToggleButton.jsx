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
    <div>
      <button
        type="button"
        aria-checked={isOn}
        aria-label={label}
        onClick={handleToggle}
        className="border-2 shadow-2xl border-sky-100 bg-amber-300 p-3 m-3 rounded hover:bg"
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleButton;
