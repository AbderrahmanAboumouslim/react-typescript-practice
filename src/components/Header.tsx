import React from "react";

interface InterProps {
  color: string;
  isLoaded: boolean;
}

const Header = (props: InterProps) => {
  if (props.isLoaded) {
    return <div style={{ color: props.color }}>Header loaded</div>;
  }
  return <div>Header not loaded</div>;
};

export default Header;
