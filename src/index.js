import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import colors from './colors'

const propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  radius: PropTypes.number,
};

const defaultProps = {
  name: 'X',
  size: 50,
  radius: 0,
};

class ColorLetter extends React.Component {

  render(){
    let {name, size, radius} = this.props
    let char = name.trim()[0].toUpperCase()

    let bgColor
    if( /[A-Z]/.test(char) ){
      let index = char.charCodeAt() - 65
      bgColor = colors[index]
    }else if( /[\d]/.test(char) ){
      bgColor = colors[parseInt(char)]
    }else{
      bgColor = [0,0,0]
    }

    let style = {
      backgroundColor: `rgb(${bgColor})`,
      width: size,
      height: size,
      display: "inline-block",
      font: Math.floor(size/2) + 'px/100px Helvetica, Arial, sans-serif',
      lineHeight: (size + Math.floor(size/10)) + 'px',
      color: "rgba(233,233,233,0.99)",
      textAlign: 'center',
      borderRadius: radius 
    }

    return(
      <span style={ style }>
        {char}
      </span>
    )
  };
};

ColorLetter.propTypes = propTypes;
ColorLetter.defaultProps = defaultProps;

export default ColorLetter;