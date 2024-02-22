import React from 'react';

import { Card, RadioButton } from 'react-native-paper';
export default class QuestionCard extends React.Component{
    constructor(props) {
        super(props);
        const {question, answerList, onAnswer, questionId} = props
        this.state = {
          value: null,
          question,
          answer: answerList.sort( () => Math.random() - 0.5),
          onAnswer,
          questionId
        };
    }

    selectAnswer = (value) => {
        this.setState({ value })
        this.state.onAnswer({questionId: this.state.questionId, value})
    }

    render(){
        return (
            <>
                <Card mode='elevated' style={{margin: 10}}>
                    <Card.Title title={this.state.question} />
                    <Card.Content>
                        <RadioButton.Group onValueChange={newValue => { this.selectAnswer(newValue) }} value={this.state.value}>
                            { this.state.answer.map((row) => 
                                <RadioButton.Item key={row.id} label={row.text} value={row.id} position='tailing'/>
                            )}
                        </RadioButton.Group>
                    </Card.Content>
                </Card>
            </>
        )
    }
}