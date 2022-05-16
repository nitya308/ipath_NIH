import React from 'react';
import Svg, { Path } from 'react-native-svg';
function List(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="2" viewBox="0 0 25 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <Path d="M8 6H21" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 12H21" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M8 18H21" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3 6H3.01" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3 12H3.01" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3 18H3.01" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default List;