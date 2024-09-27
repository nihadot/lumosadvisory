import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function isFontLoaded(fontName) {
  const testString = "abcdefghijklmnopqrstuvwxyz0123456789";
  const testSize = "16px";

  // Create a hidden test element
  const testElement = document.createElement("span");
  testElement.style.fontSize = testSize;
  testElement.style.position = "absolute";
  testElement.style.visibility = "hidden";
  testElement.style.fontFamily = "serif"; // Fallback default font
  testElement.textContent = testString;
  document.body.appendChild(testElement);

  // Get the width of the string in the fallback font
  const defaultWidth = testElement.offsetWidth;

  // Now apply the custom font and compare width
  testElement.style.fontFamily = `${fontName}, serif`;
  const newWidth = testElement.offsetWidth;

  // Remove the test element from the DOM
  document.body.removeChild(testElement);

  // If the width changes, the custom font is supported
  return defaultWidth !== newWidth;
}

// Check for multiple browsers
function checkFontSupport() {
  const fontName = 'Charter';

  // Check if the font is loaded
  if (!isFontLoaded(fontName)) {
      alert(`Your browser does not support the ${fontName} font.`);
  } else {
      console.log(`${fontName} font is supported by your browser.`);
  }
}

// Run the check on page load
window.onload = function() {
  checkFontSupport();
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
