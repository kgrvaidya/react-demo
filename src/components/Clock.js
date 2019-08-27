import React, { Component } from 'react'

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            date : new Date()
        }

        
    }

    componentDidMount(){
        this.tick();
    }

    componentWillUnmount(){
        clearInterval(Timer);
    }
    
    tick(){
        let Timer = setInterval( () => {this.setState({
            date : new Date()
        })} ,1000)
    }

    render() {
        return (
            <div>
                <h1>Current time is {this.state.date.toLocaleTimeString()}</h1>                
            </div>
        )
    }
}

export default Clock;
