import React from 'react';
import Button from 'react-bootstrap/lib/Button';


class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  handleChange(e) {
    const box = e.target.value;
    this.props.changeBoxtxt(box);
  }

  render() {
    return (
      <div>
        <h1> { this.props.title } </h1>
        Likes : <span>{this.state.likesCount}</span> <br></br>
        <Button bsStyle="primary"  onClick={this.onLike}>Like Me</Button>
        <h1>{this.props.boxtxt}</h1>
        <input onChange={this.handleChange.bind(this)} />
      </div>
    );
  }

}

export default AwesomeComponent;
