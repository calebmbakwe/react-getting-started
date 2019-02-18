import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div>
                <h3>Hello World</h3>
            </div>
        );
    }
}

class PlayGround extends Component {
    render() {
        return (
            <div>
                <Game />
                <Game />
            </div>
        );
    }
}

export default PlayGround;