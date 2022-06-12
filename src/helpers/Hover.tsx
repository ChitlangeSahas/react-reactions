import React from 'react';
import { HoverContext } from './useHover';

interface HoverProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverStyle?: React.CSSProperties;
  overrideIsHoveredValue?: boolean
}

// TODO: turn this into a HOC?
// Wrapper that keeps track of weather or not the component is being hovered
export const Hover: React.FC<HoverProps> = ({
  hoverStyle = {},
  children,
  style,
  overrideIsHoveredValue= false,
  ...rest
}) => {
  const [isHovered, setHovered] = React.useState(overrideIsHoveredValue);

  return (
    <HoverContext.Provider value={isHovered}>
      <div
        onMouseEnter={() => {overrideIsHoveredValue ? null : setHovered(true)}}
        onMouseLeave={() => {overrideIsHoveredValue ? null : setHovered(false)}}
        {...rest}
        style={{ ...style, ...(isHovered ? hoverStyle : {}) }}
      >
        {children}
      </div>
    </HoverContext.Provider>
  );
};

export default Hover;
