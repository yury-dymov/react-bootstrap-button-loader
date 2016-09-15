// We don't need to mutate props as ButtonLoader is stateless component

import React                      from 'react';
import chai, { expect }           from 'chai';
import chaiEnzyme                 from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import jsdom                      from 'jsdom';
import ButtonLoader, { Spinner }  from '../dist';

chai.use(chaiEnzyme());

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

global.document = doc;
global.window = doc.defaultView;

const icon = <span className='providedIcon'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 50 50"><path style={{fill: 'rgb(41, 128, 185)',textIndent:0,textAlign:'start',lineHeight: 'normal',textTransform: 'none',blockProgression: 'tb', InkscapeFontSpecification: 'Bitstream Vera Sans'}} d="M25,47.302l-0.64-0.533c-1.217-1.015-2.861-2.115-4.765-3.39C12.169,38.408,2,31.601,2,20C2,12.832,7.832,7,15,7 c3.896,0,7.542,1.734,10,4.699C27.458,8.734,31.104,7,35,7c7.168,0,13,5.832,13,13c0,11.601-10.169,18.408-17.595,23.379 c-1.904,1.274-3.548,2.375-4.765,3.39L25,47.302z" overflow="visible" enableBackground="accumulate" fontFamily="Bitstream Vera Sans" /></svg></span>;

describe('loading and disabled. If loading then button is disabled, disabled prop value might be any', () => {
  it('loading: true, disabled: undefined => disabled', () => {
    const component = render(<ButtonLoader loading>Press me!</ButtonLoader>);

    expect(component.find('button')).to.be.disabled()
  });

  it('loading: true, disabled: true => disabled', () => {
    const component = render(<ButtonLoader loading disabled>Press me!</ButtonLoader>);

    expect(component.find('button')).to.be.disabled();
  });

  it('loading: true, disabled: any => disabled', () => {
    const component = render(<ButtonLoader loading disabled={false}>Press me!</ButtonLoader>);

    expect(component.find('button')).to.be.disabled();
  });
});

describe('disabled and loading. Button can be in loading state even if it was disabled', () => {
  it('disabled: true, loading: undefined => loading: false', () => {
    const component = render(<ButtonLoader disabled>Press me!</ButtonLoader>);

    expect(component.find('.loader')).to.have.length(0);
  });

  it('disabled: true, loading: false => loading: false', () => {
    const component = render(<ButtonLoader disabled loading={false}>Press me!</ButtonLoader>);

    expect(component.find('.loader')).to.have.length(0);
  });

  it('disabled: true, loading: true => loading: true', () => {
    const component = render(<ButtonLoader disabled loading>Press me!</ButtonLoader>);

    expect(component.find('.loader')).to.have.length(1);
  });
});

describe('Provided icon is rendered if not loading. Otherwise showing spinner', () => {
  it('icon: undefined, loading: false => icon: undefined', () => {
    const component = render(<ButtonLoader loading={false}>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(0);
    expect(component.find('.loader')).to.have.length(0);
  });

  it('icon: undefined, loading: undefined => icon: undefined', () => {
    const component = render(<ButtonLoader>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(0);
    expect(component.find('.loader')).to.have.length(0);
  });

  it('icon: <svg />, loading: false => icon: <svg />', () => {
    const component = render(<ButtonLoader icon={icon} loading={false}>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(1);
    expect(component.find('.loader')).to.have.length(0);
  });

  it('icon: <svg />, loading: undefined => icon: <svg />', () => {
    const component = render(<ButtonLoader icon={icon}>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(1);
    expect(component.find('.loader')).to.have.length(0);
  });

  it('icon: <svg />, loading: true => icon: spinner', () => {
    const component = render(<ButtonLoader icon={icon} loading={true}>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(0);
    expect(component.find('.loader')).to.have.length(1);
  });

  it('icon: undefined, loading: true => icon: spinner', () => {
    const component = render(<ButtonLoader loading={true}>Press me!</ButtonLoader>);

    expect(component.find('.providedIcon')).to.have.length(0);
    expect(component.find('.loader')).to.have.length(1);
  });
});

describe('children prop is used', () => {
  it('passed as children prop', () => {
    const component = render(<ButtonLoader children="Press me" />);

    expect(component.find('button')).to.have.html().match(/Press me/);
  });

  it('passed as xml', () => {
    const component = render(<ButtonLoader>Press me</ButtonLoader>);

    expect(component.find('button')).to.have.html().match(/Press me/);
  });
});

describe('bsStyle, spinColor, style and className props are propagated', () => {

  it('bsStyle: success -> .btn-success', () => {
    const component = render(<ButtonLoader bsStyle="success" children="Press me" />);

    expect(component.find('.btn-success')).to.have.length(1);
  });

  it('expect Spinner to have color #333', () => {
    const component = mount(<ButtonLoader  children="Press me" loading spinColor="#333" />);

    expect(component.find(Spinner).props().spinColor).to.equal('#333');
  });

  it('className: "temp"', () => {
    const component = render(<ButtonLoader className="temp" />);

    expect(component).to.have.attr('class').match(/temp/);
  });

  it('style: {{ zIndex: "-9999" }}', () => {
    const component = render(<ButtonLoader style={{ zIndex: '-9999' }} />);

    expect(component).to.have.attr('style').match(/\-9999/);
  });
});
