import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from 'react-bootstrap-button-loader';

class App extends Component {
  static svgIcon() {
    return (
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 50 50">
          <path
            style={{
              fill: 'rgb(41, 128, 185)',
              textIndent:0,
              textAlign:'start',
              lineHeight: 'normal',
              textTransform: 'none',
              blockProgression: 'tb',
              '-inkscape-font-specification': 'Bitstream Vera Sans',
            }}
            d="M25,47.302l-0.64-0.533c-1.217-1.015-2.861-2.115-4.765-3.39C12.169,38.408,2,31.601,2,20C2,12.832,7.832,7,15,7 c3.896,0,7.542,1.734,10,4.699C27.458,8.734,31.104,7,35,7c7.168,0,13,5.832,13,13c0,11.601-10.169,18.408-17.595,23.379 c-1.904,1.274-3.548,2.375-4.765,3.39L25,47.302z"
            overflow="visible"
            enable-background="accumulate"
            font-family="Bitstream Vera Sans"
          />
        </svg>
      </span>
    );
  }

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      disabled: false,
      forceLoading: false,
      loading: 0,
      showIcon: true,
      spinColor: '#fff',
      style: 'default',
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick() {
    this.setState({ loading: 5 });
    this.interval = setInterval(() => {
      const nextLoading = this.state.loading - 1;

      if (nextLoading <= 0) {
        clearInterval(this.interval);
      }

      this.setState({ loading: Math.max(nextLoading, 0) });

    }, 1000);
  }

  render() {
    const bsButtons = ['default', 'primary', 'success', 'info', 'warning', 'danger', 'link'].map((bsStyle) => (
      <Button
        bsStyle={bsStyle}
        disable={this.state.bsStyle === bsStyle}
        onClick={() => { this.setState({ bsStyle }); }}
        style={{ marginRight: '10px' }}
      >
        {bsStyle}
      </Button>
    ));

    const spinColorButtons = ['#fff', '#444'].map((color) => (
      <Button
        disabled={this.state.spinColor === color}
        onClick={() => this.setState({ spinColor: color })}
        style={{ marginRight: '10px' }}
      >
        {color}
      </Button>
    ));

    return (
      <div>
        <div>
          <Button
            bsStyle={this.state.bsStyle}
            disabled={this.state.disabled}
            icon={this.state.showIcon ? this.constructor.svgIcon() : null}
            loading={this.state.loading || this.state.forceLoading}
            onClick={this.handleClick}
            spinColor={this.state.spinColor}
          >
            Press Me!
          </Button>
          {!!this.state.loading && <p>I am loading for {this.state.loading} more seconds</p>}
        </div>
        <div style={{ marginTop: '40px' }}>
          <hr />
          <h1>Configurable props</h1>
          <h3>bsStype</h3>
          {bsButtons}
          <h3>disabled</h3>
          <Button onClick={() => this.setState({ disabled: !this.state.disabled })}>{this.state.disabled ? 'enable' : 'disabled'}</Button>
          <h3>loading</h3>
          <Button disabled={this.state.loading} onClick={() => this.setState({ forceLoading: !this.state.forceLoading })}>{this.state.forceLoading ? 'stop' : 'start'}</Button>
          <h3>icon</h3>
          <Button onClick={() => this.setState({ showIcon: !this.state.showIcon })}>{this.state.showIcon ? 'hide' : 'show'}</Button>
          <h3>spinColor</h3>
          {spinColorButtons}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
