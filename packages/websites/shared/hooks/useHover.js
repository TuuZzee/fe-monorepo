import { useState, useRef, useEffect } from 'react';

const useHover = function () {
  const [value, setValue] = useState(false);
  const [eventType, setEventType] = useState('');
  const ref = useRef(null);

  const handleClick = () => {
    setEventType('mousedown');
    setValue(true);
  };

  const handleMouseOver = () => {
    setEventType('mouseover');
    setValue(true);
  };

  const handleMouseOut = () => {
    setEventType('mouseout');
    setValue(false);
  };

  useEffect(
    () => {
      const node = ref.current;

      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        node.addEventListener('mousedown', handleClick);
        return () => {
          node.removeEventListener('mousedown', handleClick);
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref], // Recall only if ref changes
  );
  return [ref, value, eventType];
};

export default useHover;
