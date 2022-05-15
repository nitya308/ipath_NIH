import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Home(props){
    return(
        <Svg width={props.width} height={props.height} viewBox="0 0 25 24" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <Path d="M3.8125 9L12.8125 2L21.8125 9V20C21.8125 20.5304 21.6018 21.0391 21.2267 21.4142C20.8516 21.7893 20.3429 22 19.8125 22H5.8125C5.28207 22 4.77336 21.7893 4.39829 21.4142C4.02321 21.0391 3.8125 20.5304 3.8125 20V9Z" stroke={props.strokeColor} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M9.8125 22V12H15.8125V22" stroke={props.strokeColor} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}

export default Home;

