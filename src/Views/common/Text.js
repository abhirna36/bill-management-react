// Import libraries for making a component
import React from 'react';

// Make a component
const Text = (props) => {
  const { viewStyle } = styles;

  return (
    <div className={props.textContainerStyle?props.textContainerStyle:viewStyle}>
      <p className={props.textStyle}>{props.text}</p>
    </div>
  );
};

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  }
};

// Make the component available to other parts of the app
export default Text;
