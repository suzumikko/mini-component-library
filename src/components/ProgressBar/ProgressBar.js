/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "8px",
    padding: "0",
    borderRadius: "4px",
  },
  medium: {
    height: "12px",
    padding: "0",
    borderRadius: "4px",
  },
  large: {
    height: "24px",
    padding: "4px",
    borderRadius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--border-radius": style.borderRadius,
        "--padding": style.padding,
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": style.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(
    --border-radius
  ); /* keep distance between outer and inner edges and corners equal */
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden; /* trim corners of filled bar */
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
