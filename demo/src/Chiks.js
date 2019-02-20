import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const AddChikForm = withRouter(({ history, addChik }) => {
    return (
        <div className="container">
            <div className='col-6'>
                <Form addChik={(chik) => {
                    addChik(chik);
                    history.push('/');
                }}/>
            </div>
        </div>
    );
})

class Form extends Component {
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: "",
        image: "",
        option: "",
        options: [
        ]
    }

    onFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addOption(e) {
        e.preventDefault();
        
        this.setState((prevState) => ({
            options: prevState.options.concat(this.state.option),
            option: ""
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addChik({
            answer: this.state.name,
            image: this.state.image,
            options: this.state.options
        });
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Chik</h1>
                <label htmlFor="name">Chik's name</label>
                <input className='form-control' name='name' value={this.state.name} placeholder='The name of the tech chik' onChange={this.onFieldChange} /> 
                <br />
                <label htmlFor="image">Chik's Pic</label>
                <input className='form-control' name='image' value={this.state.image} placeholder='The URL to the picture of the tech chik' onChange={this.onFieldChange} /> 
                <br />
                <label htmlFor='option'>Chik Option</label> <button onClick={this.addOption} className='btn btn-sm btn-secondary'>+</button>
                <input className='form-control' name='option' value={this.state.option} placeholder='Option for chik name' onChange={this.onFieldChange}/>
                <br />
                {this.state.options.map((option, i) => (<p key={i}>{option}</p>))}
                <br />
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default AddChikForm;