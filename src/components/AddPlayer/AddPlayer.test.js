/* eslint-env jest */
import React from 'react';
import {shallow, mount} from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
    shallow(<AddPlayer />);
});

it('should return player name', () => {
    const mockedOnPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={mockedOnPlayerAdd} />);

    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Anne';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(mockedOnPlayerAdd).toBeCalledWith('Anne');
});
