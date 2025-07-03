import React, { useMemo } from "react";

const Bubbles = () => {
  const imgBubble = useMemo(() => {
    return Array.apply(null, Array(7)).map((index) => index);
  }, []);
  return (
    <div className="relative">
      <div className="w-full bubbles z-20 absolute flex justify-around bottom-0">
        {imgBubble.map((value, index) => {
          return (
            <img
              className="pointer-events-none"
              key={index}
              src={require("../assets/extras/bubble.png")}
              alt="bubble"
              draggable={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Bubbles;
