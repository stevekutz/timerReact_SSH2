import styled, {css} from 'styled-components';

const DisplayContainerDiv = styled.div`
    
    border: 3px solid deeppink;
    width: 200px;
    color: red;
    padding:
    display: flex;
    margin: 0 auto;



`;

const DisplayDigitContainerDiv = styled.div`
    border: 5px solid purple;
    
    width: 170px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;


`

const DisplayColonDiv = styled.div`
    border: 1px solid seagreen; 

    width: 5px;
`

const DisplayDigitText = styled.div`
    border: 1px solid yellow;
    width: 25px;
    color: lightgray;
    text-align: center;
    padding: 5px;

`

export {
    DisplayContainerDiv,
    DisplayDigitContainerDiv,
    DisplayColonDiv,
    DisplayDigitText,

};
