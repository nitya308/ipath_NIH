
import React from 'react';
import Svg, { Path } from 'react-native-svg';
function MapPin(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="1" viewBox="-2 -2 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M13.125 6.25C13.125 10.625 7.5 14.375 7.5 14.375C7.5 14.375 1.875 10.625 1.875 6.25C1.875 4.75816 2.46763 3.32742 3.52252 2.27252C4.57742 1.21763 6.00816 0.625 7.5 0.625C8.99184 0.625 10.4226 1.21763 11.4775 2.27252C12.5324 3.32742 13.125 4.75816 13.125 6.25Z" stroke="#373F41" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M7.5 8.125C8.53553 8.125 9.375 7.28553 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125Z" stroke="#373F41" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg> 
    );
}

export default MapPin;