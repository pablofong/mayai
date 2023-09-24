import React, { useEffect, useState } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed here (e.g., 100ms for faster, 200ms for slower)

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, index]);

  return <div>{displayText}</div>;
};

export default TypingAnimation;
