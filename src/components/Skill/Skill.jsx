import React, { useRef } from "react";
import SkillCard from "../SkillCard/SkillCard";
import { skillCardProps } from "./SkillCardProps";
import Text from "../Text";
import "./Skill.css";

const Skill = () => {
  const maxDragLimit = -28;
  const track = useRef();
  const handleOnDown = (event) =>
    (track.current.dataset.mouseDownAt = event.clientX);

  const handleOnUp = () => {
    track.current.dataset.mouseDownAt = "0";
    track.current.dataset.prevPercentage = track.current.dataset.percentage;
  };

  const handleOnMove = (event) => {
    if (track.current.dataset.mouseDownAt === "0") return;

    const mouseDelta =
      parseFloat(track.current.dataset.mouseDownAt) - event.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.current.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      maxDragLimit
    );

    track.current.dataset.percentage = nextPercentage;

    track.current.animate(
      {
        transform: `translate(${nextPercentage}%, 0%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  };

  return (
    //TODO: Complete Skills section
    <section
      id="skill_section"
      className="p-8 overflow-hidden w-screen h-screen"
    >
      <div className="m-10">
        <Text text="Mother Tongue" textSize="text-2xl" />
      </div>
      <div className="w-full h-full z-10 relative">
        <div
          onMouseDown={handleOnDown}
          onMouseMove={handleOnMove}
          onMouseUp={handleOnUp}
          onTouchStart={(event) => handleOnDown(event.touches[0])}
          onTouchEnd={(event) => handleOnUp(event.touches[0])}
          onTouchMove={(event) => handleOnMove(event.touches[0])}
          ref={track}
          className="h-80 overflow-hidden flex items-center gap-5 absolute left-10 top-10 select-none "
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          {skillCardProps.map((data, index) => {
            return <SkillCard key={index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
