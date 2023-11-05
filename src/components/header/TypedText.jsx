
import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';

export const TypedText = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'FrontEnd Developer'],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      // typed.reset()
    };
  }, []);

  return (
    <div className="text1 container">
      <div className="row">
        <div>
      <span ref={el} className="text1" />
      </div>
      </div>
    </div>
  );
}
