import React from 'react';
//import './timerdisplay.css'

import {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,
    DisplayDigitControls,
    DigitControlButton,

} from '../styled/timer_display_style';


const TimerDisplay = (props) => {

    return (
            <div>
                <DisplayContainerDiv>
                    <DisplayDigitContainerDiv>
                        <DisplayDigitText> {props.min_tens} </DisplayDigitText>
                        <DisplayDigitText> {props.min_ones} </DisplayDigitText>
                        <DisplayColonDiv> {props.colon} </DisplayColonDiv>
                        <DisplayDigitText> {props.sec_tens} </DisplayDigitText>
                        <DisplayDigitText> {props.sec_ones} </DisplayDigitText>
                    
                    
                    </DisplayDigitContainerDiv>
                
                    <DisplayDigitControls>
                        <DigitControlButton> Inc Min </DigitControlButton>
                        <DigitControlButton> Dec Min </DigitControlButton>

                        <DigitControlButton> Inc Sec </DigitControlButton>
                        <DigitControlButton> Dec Sec </DigitControlButton>
                    </DisplayDigitControls>

                    

                    
                
                </DisplayContainerDiv>
            
            
            
            </div>

    )


}


export default TimerDisplay;