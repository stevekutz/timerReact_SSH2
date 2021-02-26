import React, {Component} from 'react';

class Timer extends Component {
    state = {
        currentDate: '',
        timeCounter: new Date(),
    
    }

    findCurrentDate = () => {
        let recentDate = new Date().toDateString();
        console.log("recentDate ");
        this.setState({currentDate: recentDate});
        
        //return new Date().toDateString()
        return recentDate;
    }

    clearDate = () => {
        this.setState({currentDate: ''})
    
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {    
        this.setState({      timeCounter: new Date()    });  
        }

    render() {
        
        console.log(" Render run ")
        // this.findCurrentDate();

        // <p> Class Timer current Date : {this.findCurrentDate()} </p>

        return (
            <div>
                <p>  Directly accessing date: {new Date().toDateString()}</p>
                <div>
                    <p> Date with seconds counter : {this.state.timeCounter.toLocaleTimeString()}</p>
                </div>    

                
                <p>  Now date says: {this.state.currentDate} </p>
                <button onClick = {this.findCurrentDate}> Click to get time {this.state.currentDate} </button>
                <button onClick = {this.clearDate}> Clear Date </button>
            </div>    
        )
    
    }


}

export default Timer;
