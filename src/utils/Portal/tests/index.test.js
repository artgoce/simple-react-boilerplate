import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Portal, { PurePortal } from '../index';

describe('<Portal />', () => {
  let reactDOMStub;
  let fakeNode;
  const Component = <div>Component</div>;

  beforeEach(() => {
    fakeNode = { node: 'portal' };
    reactDOMStub = sinon.stub(ReactDOM, 'createPortal');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should create a React Portal in portal-target node by default', () => {
    sinon.stub(document, 'getElementById').returns(fakeNode);
    shallow(<PurePortal>{Component}</PurePortal>);
    expect(reactDOMStub.calledWith(Component, fakeNode)).toBeTruthy();
  });

  it('should create a React Portal in provided node', () => {
    fakeNode.node = 'target';
    sinon.stub(document, 'getElementById').returns(fakeNode);
    shallow(<PurePortal node={fakeNode}>{Component}</PurePortal>);
    expect(reactDOMStub.calledWith(Component, fakeNode)).toBeTruthy();
  });

  it('should create a React Portal inside a FocusTrap', () => {
    const wrapper = shallow(<Portal>{Component}</Portal>);
    expect(wrapper.find('FocusTrap').length).toBeTruthy();
  });
});
