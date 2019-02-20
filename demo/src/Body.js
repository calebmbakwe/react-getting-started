import React, { Component } from 'react';

class Body extends Component {
	state = {
		questions: this.props.data,
		number: 0,
		correct: false
	}

	componentDidMount() {
		console.log(this.state);
	}

	nextQuestion = () => {
		this.setState({
			number: Math.floor(Math.random() * this.state.questions.length),
			correct: false
		});
	}

	checkAnswer = (answer) => {
		this.setState({correct: (this.state.questions[this.state.number].answer === answer)});
		console.log(answer, this.state.questions[this.state.number].answer);
	} 

	render() {
		return (
			<div className={(this.state.correct ? 'bg-success' : '') + ' row'}>
				<Image nextQuestion={this.nextQuestion} image={this.state.questions[this.state.number].image} />
				<Question correct={this.state.correct} checkAnswer={this.checkAnswer} options={this.state.questions[this.state.number].options}/>
			</div>
		)
	}
}

const Image = (props) => {
	return (
		<div className='col-4'>
			<img src={props.image} width='100%' alt="omlete du fromage"/>
			<br /><br />
			<button className="btn btn-secondary" onClick={props.nextQuestion}>Next</button>
		</div>
	);
}

const Question = (props) => {
	return (
		<div className='col-8'>
			{props.options.map((option, i) => <p key={i} onClick={() => props.checkAnswer(option)} className="question form-control">{option}</p>)}
		</div>
	);
};

export default Body;