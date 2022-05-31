<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Left(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="2" viewBox="1 2 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M19 12H5" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 19L5 12L12 5" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg> 
    );
}

export default Left;