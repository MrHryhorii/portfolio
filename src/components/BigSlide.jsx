import React from "react";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function BigSlide(props) {
  // Destructure with safe defaults
  const {
    children,
    dir = "up",                             // "up" | "down" | "left" | "right"
    distance = 96,                          // px offset before entering
    duration = 550,                         // ms
    fraction = 0.3,                         // 0..1: how much must be visible to start
    triggerOnce = true,                     // animate only once
    cascade = false,                        // cascade children one-by-one
    damping = 0.12,                         // cascade step (duration * damping)
    timingFn = "cubic-bezier(.22,1,.36,1)", // smooth ease-out
    style,                                  // allow passing extra styles
    ...rest
  } = props || {};

  // no children — no render
  if (!children) return null;

  const isHorizontal = dir === "left" || dir === "right";
  const axis = isHorizontal ? "X" : "Y";

  // Positive start moves from bottom/right toward 0
  // Negative start moves from top/left toward 0
  const start = (dir === "up" || dir === "right") ? distance : -distance;

  const kf = keyframes`
    from { opacity: 0; transform: translate${axis}(${start}px); }
    to   { opacity: 1; transform: translate${axis}(0); }
  `;

  return (
    <Reveal
      keyframes={kf}
      duration={duration}
      fraction={fraction}
      triggerOnce={triggerOnce}
      cascade={cascade}
      damping={damping}
      style={{ animationTimingFunction: timingFn, ...style }}
      {...rest} // keep API flexible
    >
      {children}
    </Reveal>
  );
}
