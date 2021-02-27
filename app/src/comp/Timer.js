import React, {Component} from 'react';

// Alternative way to declare class component
// import React from 'react';

// class Time extends React.Component{

class Timer extends Component {
    
    // Legacy way using a constructor

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentDate: '',
    //         secondsCount: 0,
    //         timeCounter: new Date(),
    //         showTime: false,
    //         buttonText: 'Start' 
    //     }
    
    // }
     
    state = {
        currentDate: '',
        secondsCount: 0,
        timeCounter: new Date(),
        showTime: false,
        timerActive: 'false',
        buttonText: 'Start',
    }

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

    toggleTimer = () => {
        console.log("TOGGLED");

        this.setState({
                timerActive: !this.state.timerActive,        
            })
        
        this.updateButtonStartStop();

    }

    updateButtonStartStop = () => {
        if (this.state.timerActive) {
            this.setState({buttonText: 'Start'})
            // this.countSeconds();
        } else {
            this.setState({buttonText: 'Stop'})
            
        }
        
        this.countSeconds();    
    }

    // Deprecated Life Cycle Methods

    // componentWillMount → UNSAFE_componentWillMount
    // componentWillReceiveProps → UNSAFE_componentWillReceiveProps
    // componentWillUpdate → UNSAFE_componentWillUpdate




    // called AFTER all child elements & components are mounted (Mounting phase) in the DOM
    //     similar to how useEffect used with Hooks
    componentDidMount() {
        console.log("CDM fired")
        this.setState({timerActive: false });
        let intervalID = setInterval(this.countSeconds, 1000);
        this.setState({intervalID: intervalID});
        this.setState({timerActive: false });
        // clearInterval(this.state.intervalID);
        
        console.log("timerActive", this.state.timerActive);

    }

    countSeconds = () => {

        if(this.state.timerActive) {

            // let intervalID = setInterval(this.countSeconds, 1000);
            // this.setState({intervalID: intervalID});

            this.setState({secondsCount: this.state.secondsCount + 1})    

        } else {
            this.setState({secondsCount: this.state.secondsCount });
        }
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

    resetTimer  = () => {
        this.setState({timerActive: false});
        this.setState({secondsCount: 0 });
    }


    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    // tick() {    
    //     this.setState({ timeCounter: new Date() });  
    //     }

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
                    <button onClick = {this.toggleTimer}> {this.state.buttonText} </button>
                    <button onClick = {this.resetTimer } > Reset </button>
                
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