import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentRating = this.props.rating;
    if (nextProps.rating > currentRating) {
      this.setState({
        increasing: true,
        decreasing: false
      })
    } else if (nextProps.rating < currentRating) {
      this.setState({
        increasing: false,
        decreasing: true
      })
    } else {
      this.setState({
        increasing: false,
        decreasing: false
      })
    }
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
