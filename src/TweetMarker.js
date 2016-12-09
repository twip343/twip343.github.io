import 'materialize-css';
import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import {TweetMarkerStyle, TweetMarkerStyleHover} from './TweetMarkerStyle.js'

export default class TweetMarker extends Component {
  static propTypes = {
    text: PropTypes.string,
    hover: PropTypes.bool,
    tweetUrl: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? TweetMarkerStyleHover : TweetMarkerStyle;
    return (
      <div style={style}>
        <a href={this.props.tweetUrl} target="_blank">T</a>

      </div>
    );
  }
}
