import * as React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App', () => {
    test('should match snapshot', () => {
        const component = shallow(<App title="myTitle" subtitle="mySubtitle" />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
