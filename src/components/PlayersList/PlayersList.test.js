/* eslint-env jest */
import React from 'react';
import {shallow} from 'enzyme';
import PlayersList from './PlayersList';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunde',
            score: 5
        },
        {
            name: 'Hermenegilde',
            score: 0
        }
    ];
    const playerComponent = shallow(<PlayersList players={players} />);

    const expectedPlayersNumber = playerComponent.find(Player).length;

    expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate', () => {
    const players = [
        {
            name: 'Kunegunde',
            score: 5
        },
        {
            name: 'Hermenegilde',
            score: 0
        }
    ];
    const mockedOnScoreUpdate = jest.fn();

    const playerComponent = shallow(
        <PlayersList
            players={players}
            onScoreUpdate={mockedOnScoreUpdate}
        />
    );

    const lastPlayer = playerComponent.find(Player).last();
    const onPlayerScoreChange = lastPlayer.prop('onPlayerScoreChange');

    onPlayerScoreChange(8);

    expect(mockedOnScoreUpdate).toBeCalledWith(1, 8);
});

it('should call onPlayerRemove', () => {
    const players = [
        {
            name: 'Kunegunde',
            score: 5
        },
        {
            name: 'Hermenegilde',
            score: 0
        }
    ];
    const mockedOnPlayerRemove = jest.fn();

    const playerComponent = shallow(
        <PlayersList
            players={players}
            onPlayerRemove={mockedOnPlayerRemove}
        />
    );

    const lastPlayer = playerComponent.find(Player).last();
    const onPlayerRemove = lastPlayer.prop('onPlayerRemove');

    onPlayerRemove();

    expect(mockedOnPlayerRemove).toBeCalledWith(1);
});
