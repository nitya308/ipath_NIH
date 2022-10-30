import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Clipboard(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="1" viewBox="0 0 25 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <Path d="M16.1484 4H18.1484C18.6789 4 19.1876 4.21071 19.5627 4.58579C19.9377 4.96086 20.1484 5.46957 20.1484 6V20C20.1484 20.5304 19.9377 21.0391 19.5627 21.4142C19.1876 21.7893 18.6789 22 18.1484 22H6.14844C5.618 22 5.1093 21.7893 4.73422 21.4142C4.35915 21.0391 4.14844 20.5304 4.14844 20V6C4.14844 5.46957 4.35915 4.96086 4.73422 4.58579C5.1093 4.21071 5.618 4 6.14844 4H8.14844" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15.1484 2H9.14844C8.59615 2 8.14844 2.44772 8.14844 3V5C8.14844 5.55228 8.59615 6 9.14844 6H15.1484C15.7007 6 16.1484 5.55228 16.1484 5V3C16.1484 2.44772 15.7007 2 15.1484 2Z" stroke={props.strokeColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default Clipboard;

