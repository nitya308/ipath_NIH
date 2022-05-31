import React from 'react';
import Svg, { Path } from 'react-native-svg';
function CheckMark(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="1" viewBox="-3 -3 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M12.8334 6.46334V7C12.8327 8.25792 12.4254 9.4819 11.6722 10.4894C10.919 11.4969 9.86033 12.234 8.65404 12.5906C7.44775 12.9473 6.15848 12.9044 4.97852 12.4685C3.79856 12.0326 2.79113 11.2269 2.10648 10.1716C1.42182 9.11636 1.09663 7.86804 1.17939 6.61285C1.26216 5.35767 1.74845 4.16286 2.56574 3.20663C3.38304 2.2504 4.48754 1.58398 5.71453 1.30675C6.94151 1.02953 8.22524 1.15637 9.37425 1.66834" stroke={props.strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M12.8333 2.33334L7 8.17251L5.25 6.42251" stroke={props.strokeColor} stroke-linecap="round" stroke-linejoin="round"/>
        </Svg> 
    );
}

export default CheckMark;