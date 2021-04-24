import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

type Props={
  page:string
}

export default class Link extends React.Component<Props, {}> {
  constructor(props:Props) {
    super(props);

    // this._onMouseEnter = this._onMouseEnter.bind(this);
    // this._onMouseLeave = this._onMouseLeave.bind(this);

    // this.state = {
    //   class: STATUS.NORMAL,
    // };
  }

  // _onMouseEnter() {
  //   this.setState({class: STATUS.HOVERED});
  // }

  // _onMouseLeave() {
  //   this.setState({class: STATUS.NORMAL});
  // }

  render() {
    return (
      <a
        className="normal"
        href={this.props.page || '#'}
      >
        {this.props.children}
      </a>
    );
  }
}