import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Back(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 9 16" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.75 14.5L1 7.75L7.75 1" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>

  );
}

export default Back;