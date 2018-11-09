import React, { Component } from 'react';
import { HeaderDiv } from '../../elements/Div';

class Expenses extends Component {
    constructor() {
        super();
        this.state = {
            withinBudget: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <HeaderDiv withinBudget={this.state.withinBudget}>
                    <h1>Hello, Chrissy!</h1>
                </HeaderDiv>
                {this.state.withinBudget && <p>Congratulations! You've only spent $50 this month.</p>}
                {!this.state.withinBudget && <p>Whoops! You're over budget.</p>}
            </React.Fragment>
        )
    }
}

export default Expenses;