import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Watch(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="1.5" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke={props.color || "#373737"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12 9V12L13.5 13.5" stroke={props.color || "#373737"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M16.51 17.35L16.16 21.18C16.1149 21.6787 15.8845 22.1423 15.5142 22.4792C15.1439 22.8162 14.6607 23.002 14.16 23H9.82998C9.32931 23.002 8.84609 22.8162 8.47578 22.4792C8.10548 22.1423 7.87504 21.6787 7.82998 21.18L7.47998 17.35M7.48998 6.65002L7.83998 2.82002C7.88489 2.32309 8.11391 1.8609 8.4821 1.52417C8.85028 1.18744 9.33103 1.00049 9.82998 1.00002H14.18C14.6807 0.997985 15.1639 1.18381 15.5342 1.52079C15.9045 1.85776 16.1349 2.32137 16.18 2.82002L16.53 6.65002" stroke={props.color || "#373737"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg> 
    );
}

export default Watch;