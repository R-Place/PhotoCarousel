import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import App from '../client/src/components/App.jsx';

describe ('<App />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
    App.prototype.componentDidMount.restore();
  });
});