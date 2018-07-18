import React, { Component } from 'react';
import './App.css';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
    constructor() {
        super();

        this.state = {
            players: []
        };
    }

    onPlayerAdd = (playerName) => {
        const newPlayer = {
            name: playerName,
            score: 0,
        };
        if (playerName) {
            this.setState(prevState => ({
                players: [...prevState.players, newPlayer]
            }));
        }
    }

    onScoreUpdate = (playerIndex, scoreChange) => {
        this.setState(prevState => ({
            players: prevState.players.map((player, index) => {
                if (index === playerIndex) {
                    return {...player, score: player.score + scoreChange};
                }
                return player;
            })
        }));
    }

    onPlayerRemove = (playerIndex) => {
        this.setState(prevState => ({
            players: prevState.players.filter(
                (player, index) => index !== playerIndex
            )
        }));
    }

    render() {
        return (
            <div className="App">
                <AddPlayer onPlayerAdd={this.onPlayerAdd} />
                <PlayersList
                    players={this.state.players}
                    onScoreUpdate={this.onScoreUpdate}
                    onPlayerRemove={this.onPlayerRemove}
                />
            </div>
        );
    }
}

export default App;
