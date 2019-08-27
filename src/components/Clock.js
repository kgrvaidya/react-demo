import React, { Component } from 'react'
// import variables from '../scss/_variables.scss'
// import style from '../style.scss'

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            date : new Date(),
            isDayMode : false
        }

        this.onClick = this.onClick.bind(this);
        
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
 
    onClick(e){ 
        let divi = document.querySelector('body');

        if (this.state.isDayMode == false){
            divi.classList.add('night');
            divi.classList.remove('day');
        }
        else {
            divi.classList.add('day');
            divi.classList.remove('night');
        }
        this.setState({isDayMode : !this.state.isDayMode})
    }

    render() {
        return (
            <div id="clock">
                <h1>Current time is {this.state.date.toLocaleTimeString()}</h1>
                <button id="mode-button" onClick = {this.onClick}>{ this.state.isDayMode ? 'Click for Day' : 'Click for Night'}</button>                
                <p>{this.state.isDayMode}</p>
            </div>
        )
    }
}

export default Clock;
