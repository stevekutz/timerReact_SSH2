import React, {Component} from 'react';
import TimerDisplay from './TimerDisplay'
import {
    Timer_div
} from '../styled/timer_style';



// Alternative way to declare class component
// import React from 'react';

// class Time extends React.Component{

class Timer extends Component {
    

    // ******************  Define State  ******************
    // Legacy way using a constructor

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentDate: '',
    //         secondsCount: 0,
    //         timeCounter: new Date(),
    //         showTime: false,
    //         timerActive: 'false',
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
        sec_OnesDigit: 0,
        sec_TensDigit: 0,
        min_OnesDigit: 0,
        min_TensDigit: 0,
        fullTime: false,

        secDigits: '00',
        minDigits: '00',
        secTotal: 0,
        minTotal: 0,

    }
    // ****************************************************



    // **************   LifeCycle Hooks  ********************************
    // Deprecated Life Cycle Methods:
        // componentWillMount → UNSAFE_componentWillMount
        // componentWillReceiveProps → UNSAFE_componentWillReceiveProps
        // componentWillUpdate → UNSAFE_componentWillUpdate

    componentDidMount() {
        // called AFTER all child elements & components are mounted (Mounting phase) in the DOM
        // use for initializing a DOM node(e.g. network requests, suscriptions, ...) 
        // use for measuring a DOM node size/position (e.g before setting up a modal, images, ...)
        //     'side-effects' are set up here
        //     a bit similar to how useEffect is used with Hooks
        console.log("CDM fired")
        // this.setState({secTotal: this.state.secondsCount - (60 * this.state.minTotal)});



        // setup for Date with seconds counter
        setInterval(() => {
            this.setState({timeCounter: new Date()});
        }, 1000)
        
        // setup for start/stop timer
        let intervalID = setInterval(this.countSeconds, 10);
        this.setState({intervalID: intervalID});
        this.setState({timerActive: false });
        
        console.log("timerActive", this.state.timerActive);

    }

    componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate(prevProps, prevState, snapshot)
        // called AFTER a component updates 
        // 'side-effects' that are set up in CDM are managed here
        // NOTE: All network requests must be inside a conditional statement to avoid infinite loops
            // prevProps: Previous props passed to the component
            // prevState: Previous state of the component
            // snapshot: Value returned by getSnapshotBeforeUpdate() method


        // let count = this.state.secondsCount;
        let count = prevState.secondsCount;
        let countMSG = "";

        if (count % 2 === 0) {
            countMSG = " even " + count.toString();
            // console.log(countMSG)

        } else {
            countMSG = " ODD " + count.toString();
            // console.log(countMSG)
        }

    }

    componentWillUnmount() {
    // called before a component is unmounted(and destroyed)
    // Should be used for 'cleanup' (e.g. voiding, removing, ...) for anything created in componentDidMount
    // Examples of things created in componentDidMount: timers, counters, network requests, subscriptions, ... 
        console.log("componentWillUnmount called");
        clearInterval(this.state.intervalID);
    }

    // ******************************************************************

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

    }


    countSeconds = () => {

        if(this.state.timerActive) {
            this.setState({secondsCount: this.state.secondsCount + 1})                
            this.assignDigits();

        } else {
            this.setState({secondsCount: this.state.secondsCount });
        }

    }

    assignDigits() {
        // let secTotal = this.state.secTotal;
        // let minTotal = this.state.minTotal;    

        this.setState({secTotal: this.state.secondsCount - (60 * this.state.minTotal)});

        if( this.state.secTotal >= 0 && this.state.secTotal <= 9) {
            this.setState({secDigits: '0' + this.state.secTotal.toString()});
        
        } else if (this.state.secTotal > 9 && this.state.secTotal <= 59) {
            this.setState({secDigits: this.state.secTotal.toString()});

        } else if (this.state.secTotal > 59) {
            console.log("MIN");
            this.setState({secTotal: 0})
            this.setState({minTotal: this.state.minTotal + 1})
            
            if(this.state.minTotal <= 9) {
                this.setState({minDigits: '0' + this.state.minTotal.toString()})
            } else if (this.state.minTotal <= 59) {
                this.setState({minDigits: this.state.minTotal.toString()})
                this.setState({secTotal: 0})    
            } else {
                console.log(" Hour Reached ")
            }
        }  


        


        // // assign sec_Ones
        // this.setState({sec_OnesDigit: this.state.secondsCount.toString().slice(-1)})

        // // assign_sec_Tens
        // if(this.state.secondsCount % 10 === 0) {

        //         if (this.state.sec_TensDigit >= 0 && this.state.sec_TensDigit < 5) {
        //             this.setState({ sec_TensDigit: this.state.sec_TensDigit + 1 })    
        //             // this.setState({sec_TensDigit: this.})
        //         } else {
        //             this.setState({ sec_TensDigit: 0 })
                    
        //             if(this.state.min_OnesDigit >= 0 && this.state.min_OnesDigit < 9) {    
        //                 this.setState({ min_OnesDigit: this.state.min_OnesDigit + 1 })
        //             } else if (this.state.min_TensDigit < 5) {
        //                 this.setState({ min_OnesDigit: 0})
        //                 this.setState({ min_TensDigit: this.state.min_TensDigit + 1 })
        //             } else if (this.state.min_TensDigit >= 5) {
        //                 console.log(" over an hour !!!!! ")
        //                 this.setState({fullTime: true})
        //             }
        //         } 
        // }

    }

    resetTimer  = () => {
        this.setState({timerActive: false});
        this.setState({secondsCount: 0 });
        this.resetDisplayTimer();
    }

    resetDisplayTimer = () => {
        // *** for single digit display
        // this.setState({sec_OnesDigit: 0 });
        // this.setState({sec_TensDigit: 0 });
        // this.setState({min_OnesDigit: 0 });
        // this.setState({min_TensDigit: 0 });

        // *** for double digit display
        this.setState({secDigits: '00'});
        this.setState({minDigits: '00'});

    }

    incMin = () => {
        if (this.state.minDigits >= 0 && this.state.minDigits < 59) {
            this.setState({minDigits: this.state.minDigits + 1})
        }
    }

    decMin = () => {
        if (this.state.minDigits > 0 && this.state.minDigits <= 59) {
            this.setState({minDigits: this.state.minDigits - 1})
        }
    }

    incSec = () => {
        if (this.state.secDigits >= 0 && this.state.secDigits < 59) {
            this.setState({secDigits: this.state.secDigits + 1})
        }
    }

    decSec = () => {
        if (this.state.secDigits > 0 && this.state.secDigits <= 59) {
            this.setState({secDigits: this.state.secDigits - 1})
        }
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
            <Timer_div>

                <TimerDisplay 
                    min_tens = {this.state.minDigits.toString().slice(-2,1)}
                    min_ones = {this.state.minDigits.toString().slice(-1)}
                    colon = ":"
                    sec_tens = {this.state.secDigits.toString().slice(-2,1)}
                    sec_ones = {this.state.secDigits.toString().slice(-1)}
                    incMin_handler = {this.incMin}
                />

                <p>  Current Date: {new Date().toDateString()}</p>
                <div>
                    <p style = {{border: "1px solid blue", width: "300px", margin: "0 auto"}}> Date with seconds counter : {this.state.timeCounter.toLocaleTimeString()}</p>
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
                <button onClick = {this.findCurrentDate}> Click to get date {this.state.currentDate} </button>
                <button onClick = {this.clearDate}> Clear Date </button>
            </Timer_div>    
        )    
    }

}

export default Timer;


/*
    <TimerDisplay 
        min_tens = {this.state.min_TensDigit.toString()}
        min_ones = {this.state.min_OnesDigit.toString()}
        colon = ":"
        sec_tens = {this.state.sec_TensDigit.toString()}
        sec_ones = {this.state.sec_OnesDigit.toString()}
    />
*/