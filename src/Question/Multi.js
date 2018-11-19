import React, { Component } from 'react';

class Multi extends Component {

    constructor() {
        super();
        this.state = {
            questionText: 'This is a multiple-choice question. Select all correct answers.',
            possibleAnswers: ['Red', 'Blue', 'Green'],
            selectedAnswers: []
        };
    }

    handleClick = (e) => {
        const answer = e.target.innerHTML;
        if (this.state.selectedAnswers.includes(answer)) {
            //removes clicked answer from array
            this.setState((prevState) => {
                return {...prevState, selectedAnswers: prevState.selectedAnswers.filter(item => item !== answer)}
            }, () => {
                console.log(`${answer} removed, current state: `, this.state.selectedAnswers)
            })
        } else {
            //adds selected answer to array
            this.setState((prevState) => {
                return {...prevState, selectedAnswers: [...prevState.selectedAnswers, answer]}
            }, () => {
                console.log('state updated: ', this.state.selectedAnswers)
            })
        }
    }

    render() {
        // TODO: Might selectively render button type if selectedAnswers.includes(answer)
        const answerButtons = this.state.possibleAnswers.map((answer, index) => <button key={index} onClick={this.handleClick}>{answer}</button>);

        return (
            <div>
                <p>{this.state.questionText}</p>   
                {answerButtons}
            </div>
        )
    }
}

export default Multi;