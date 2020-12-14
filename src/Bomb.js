// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {

    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    boom(){
        const remains = this.state.secondsLeft;
        return (remains == 0 ? "Boom!" : remains + " seconds left before I go boom!")
    }

    render(){
        return <p>{this.boom()}</p>
    }
}
