import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalSelect>
        {displayedValue}
        <IconWrapper style={{ "--size": "24px" }}>
          <Icon id="chevron-down" size={24} />
        </IconWrapper>
      </PresentationalSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content; /* on wrapper instead custom select, so native select is only as wide as presentational */
`;

const NativeSelect = styled.select`
  /* sit on top, fill all available space, hide */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none; /* Allow the select to span the full height in Safari */
`;

const PresentationalSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121; /* fallback of following line for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color; /* set native focus color, width gets somehowignored */
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none; /* click on icon should open select */
`;

export default Select;
