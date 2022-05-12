import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableHighlight } from 'react-native';
import Svg, { Path } from 'react-native-svg';
function Bookmark(props){
    const dispatch = useDispatch();
    const [fillColor, setFillColor] = useState("none");
    return(
        <TouchableHighlight onPress={props.press}>
            <Svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={props.color} xmlns="http://www.w3.org/2000/svg">
            <Path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#25282B" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </TouchableHighlight>
    );
}
export default Bookmark;