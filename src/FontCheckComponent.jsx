import React, { useEffect } from 'react';

const FontCheckComponent = () => {
  // Function to check if the font is loaded
  const isFontLoaded = (fontName) => {
    const testString = "abcdefghijklmnopqrstuvwxyz0123456789";
    const testSize = "16px";

    // Create a hidden test element
    const testElement = document.createElement("span");
    testElement.style.fontSize = testSize;
    testElement.style.position = "absolute";
    testElement.style.visibility = "hidden";
    testElement.style.fontFamily = "serif"; // Fallback font
    testElement.textContent = testString;
    document.body.appendChild(testElement);

    // Get the width of the string in the fallback font
    const defaultWidth = testElement.offsetWidth;

    // Apply the custom font and compare widths
    testElement.style.fontFamily = `${fontName}, serif`;
    const newWidth = testElement.offsetWidth;

    // Remove the test element from the DOM
    document.body.removeChild(testElement);

    // If the width changes, the custom font is supported
    return defaultWidth !== newWidth;
  };

  // Function to run the font check
  const checkFontSupport = () => {
    const fontName = 'Baskervville';

    if (!isFontLoaded(fontName)) {
      alert(`Your browser does not support the ${fontName} font.`);
    } else {
      console.log(`${fontName} font is supported by your browser.`);
    }
  };

  // Run the font check after the component mounts
  useEffect(() => {
    checkFontSupport();
  }, []);

  return (
    <>
    
    </>
  );
};

export default FontCheckComponent;
