import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Filter(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="2" viewBox="0 0 24 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <Path d="M4 21V14" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M4 10V3" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 21V12" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 8V3" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20 21V16" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20 12V3" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M1 14H7" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9 8H15" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M17 16H23" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default Filter;

