import React, { Component } from 'react';

class Question extends Component {

    constructor() {
        super();
        this.state = {
            questionText: 'This is a true or false question. Which one is true?',
            possibleAnswers: ['True', 'False'],
            selectedAnswer: null
        };
    }

    handleClick = (e) => {
        this.setState({
            ...this.state,
            selectedAnswer: e.target.innerHTML
        }, () => {
            // cb here follows setState - TODOS: 
            // 1. use this space to auto-save when answer selected
            // 2. update display state of button to show selected (or do this with selective render?)
            console.log('State updated: ', this.state)
        })
    }

    render() {
        // TODO: Might selectively render button type if answer === selectedAnswer
        const buttons = this.state.possibleAnswers.map((answer, index) => <button key={index} onClick={this.handleClick}>{answer}</button>);

        return (
            <div>
                <p>{this.state.questionText}</p>   
                {buttons}
            </div>
        )
    }
}

export default Question;