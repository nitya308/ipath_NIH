import React from 'react';
import Svg, { Path } from 'react-native-svg';
function Pill(props){
    return(
        <Svg width={props.width} height={props.height} strokeWidth="3" viewBox="-1 -1 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.8956 0.010228C9.96469 0.105735 9.12475 0.449485 8.3917 1.03492C8.16623 1.21499 1.41327 7.9566 1.12632 8.28807C0.599731 8.89641 0.232425 9.65481 0.0808517 10.4467C-0.0472658 11.1162 -0.0222472 11.8733 0.149678 12.529C0.600833 14.2497 2.03552 15.5904 3.77459 15.9164C4.55793 16.0632 5.34769 16.0163 6.08867 15.779C6.64645 15.6004 7.12567 15.3432 7.57717 14.9801C7.75656 14.8359 14.4376 8.1889 14.7538 7.84009C15.5457 6.96645 15.9532 5.97603 15.9967 4.81909C16.0507 3.38434 15.4357 2.00966 14.3217 1.07524C14.1145 0.901435 13.7786 0.672823 13.5396 0.543047C13.0521 0.278222 12.4095 0.0804497 11.8328 0.0177675C11.6533 -0.00176306 11.0589 -0.0065354 10.8956 0.010228ZM11.8671 1.37111C12.5118 1.47283 13.1154 1.76669 13.5975 2.21353C13.7465 2.35155 13.78 2.4105 13.78 2.53416C13.78 2.71018 13.6781 2.83729 13.5199 2.85852C13.3767 2.87775 13.3136 2.85134 13.1466 2.7024C12.8492 2.43717 12.5362 2.25426 12.1697 2.13148C11.8603 2.02785 11.6091 1.99458 11.2366 2.0079C10.7988 2.02356 10.5053 2.09474 10.1515 2.2711C9.78707 2.45273 9.74775 2.48754 8.47183 3.75791C7.50716 4.71839 7.24433 4.96954 7.18334 4.98911C7.02748 5.03912 6.85145 4.96894 6.77849 4.82774C6.74116 4.75545 6.74074 4.60253 6.77767 4.53235C6.79336 4.50258 7.35448 3.93148 8.0246 3.26323C9.13459 2.15636 9.26236 2.03541 9.46035 1.90409C10.1905 1.4198 11.0164 1.2369 11.8671 1.37111ZM7.75969 8.2371C9.30815 9.78615 10.5751 11.0586 10.5751 11.0648C10.5751 11.071 9.82918 11.8213 8.91751 12.732C7.88037 13.7681 7.19788 14.4346 7.0941 14.5126C5.98908 15.343 4.59473 15.5577 3.30386 15.0964C2.73799 14.8941 2.22654 14.5608 1.79093 14.1103C1.39077 13.6966 1.1097 13.2532 0.912453 12.7248C0.746357 12.2797 0.670601 11.8403 0.671282 11.3259C0.672504 10.4102 0.950332 9.59971 1.5167 8.85955C1.64274 8.69483 4.91588 5.39416 4.93527 5.41223C4.94024 5.41686 6.21122 6.68805 7.75969 8.2371Z" fill={props.color || "#373737"}/>
        </Svg> 
    );
}

export default Pill;