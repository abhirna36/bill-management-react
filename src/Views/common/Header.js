// Import libraries for making a component
import React from 'react';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <div style={viewStyle}>
      <p style={textStyle}>{props.headerText}</p>
    </div>
  );
};

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ebebeb',
    height: 50,
  },
  textStyle: {
    fontSize: 25,
  }
};

// Make the component available to other parts of the app
export default Header;
