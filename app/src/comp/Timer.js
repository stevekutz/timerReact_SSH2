import React, {Component} from 'react';

// Alternative way to declare class component
// import React from 'react';

// class Time extends React.Component{

class Timer extends Component {
    
    // Legacy way using a constructor

    constructor(props) {
        super(props);
        this.state = {
            currentDate: '',
            secondsCount: 0,
            timeCounter: new Date(),
            showTime: false,
        }
    
    }
     
    // state = {
    //     currentDate: '',
    //     timeCounter: new Date(),
    
    // }

    findCurrentDate = () => {
        let recentDate = new Date().toDateString();
        console.log("recentDate ");
        this.setState({
            currentDate: recentDate,
            showTime: true,
            });
        
        //return new Date().toDateString()
        return recentDate;
    }

    clearDate = () => {
        this.setState({
            currentDate: '',
            showTime: false,
            })
    
    }

    // Deprecated Life Cycle Methods

    // componentWillMount → UNSAFE_componentWillMount
    // componentWillReceiveProps → UNSAFE_componentWillReceiveProps
    // componentWillUpdate → UNSAFE_componentWillUpdate




    // called AFTER all child elements & components are mounted (Mounting phase) in the DOM
    //     similar to how useEffect used with Hooks
    componentDidMount() {
        console.log("CDM fired")

        this.timerID = setInterval(
            () => {
                this.tick();
                this.setState({secondsCount: this.state.secondsCount + 1 })
            }, 1000 );
    }


    // called AFTER a component updates 
    // NOTE: All network requests must be inside a conditional statement to avoid infinite loops
        // prevProps: Previous props passed to the component
        // prevState: Previous state of the component
        // snapshot: Value returned by getSnapshotBeforeUpdate() method

    // componentDidUpdate(prevProps, prevState, snapshot)
    componentDidUpdate(preProps, prevState) {

        // let count = this.state.secondsCount;

        let count = prevState.secondsCount;
        let countMSG = "";

        if (count % 2 === 0) {
            // this.setState({secondsMSG: 'even'})
            countMSG = " even " + count.toString();
            console.log(countMSG)
            
        } else {
            countMSG = " ODD " + count.toString();
            console.log(countMSG)
        }

    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {    
        this.setState({ timeCounter: new Date() });  
        }

    render() {
        let intType;  

        // if (this.state.secondsCount %2 === 0) {
        //     intType = <p> even </p>
        // } else {
        //     intType = <p> ODD </p>
        // } 

        this.state.secondsCount %2 === 0 ? intType = <p> even </p> : intType = <p> ODD </p>


        return (
            <div>
                <p>  Current Date: {new Date().toDateString()}</p>
                <div>
                    <p> Date with seconds counter : {this.state.timeCounter.toLocaleTimeString()}</p>
                </div>    
                <div>
                    <p> Seconds counter: {this.state.secondsCount} </p>
                    {intType}
                </div>


                <p>  Now date says: {this.state.currentDate} </p>
                <button onClick = {this.findCurrentDate}> Click to get time {this.state.currentDate} </button>
                <button onClick = {this.clearDate}> Clear Date </button>
            </div>    
        )    
    }

}

export default Timer;