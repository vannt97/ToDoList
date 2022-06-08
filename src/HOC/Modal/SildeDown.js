import React from "react";
import { useSpring, animated } from "react-spring";
export default function SildeDown(Component) {
  let propsSpring = useSpring({
    marginTop: 0,
    from: {
      marginTop: -100,
    },
  });
  return (
    <animated.div style={propsSpring}>
      <Component />
    </animated.div>
  );
}
