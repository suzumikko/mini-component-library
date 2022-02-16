import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14 / 16 + "rem",
    height: 24 / 16 + "rem",
    iconSize: "16",
    iconStrokeWidth: "1",
    borderWidth: "1px",
  },
  large: {
    fontSize: 18 / 16 + "rem",
    height: 36 / 16 + "rem",
    iconSize: "24",
    iconStrokeWidth: "2",
    borderWidth: "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed to IconInput ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": style.iconSize + "px" }}>
        <Icon
          id={icon}
          size={style.iconSize}
          strokeWidth={style.iconStrokeWidth}
        />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          "--font-size": style.fontSize,
          "--height": style.height,
          "--width": width + "px",
          "--border-width": style.borderWidth,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding-left: var(--height);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
