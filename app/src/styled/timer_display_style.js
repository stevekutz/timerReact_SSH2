import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 40%;
    color: red;
    padding:
    display: flex;
    margin: 4px auto;



`;

const DisplayDigitContainerDiv = styled.div`
    border: 5px solid purple;
    
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 10px;
    margin: 4px auto;


`

const DisplayColonDiv = styled.div`
    border: 1px solid seagreen; 

    width: 5px;
`

const DisplayDigitText = styled.div`
    border: 1px solid yellow;
    width: 12px;
    color: lightgray;
    text-align: center;
    // padding: 1px;
    //margin: 4px;

`
const DisplayDigitControls = styled.div`
    border: 1px solid blue;
    
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    margin: 4px auto;

`

const DisplayDigitControlsSec = styled.div`
    border: 1px solid blue;
    
    display: flex;
    justify-content: end;
    width: 8px;

`

const DigitControlButton = styled.button`
    border: 1px solid red;
    background: lightblue;

`

export {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,
    DisplayDigitControls,
    DigitControlButton,
    

};
