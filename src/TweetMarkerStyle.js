const K_SIZE = 20;

const TweetMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '2px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: K_SIZE / 2.5,
  fontWeight: 'bold',
  padding: K_SIZE / 10,
  cursor: 'pointer'
};

const TweetMarkerStyleHover = {
  ...TweetMarkerStyle,
  border: '2px solid #3f51b5',
  color: '#f44336'
};

export {TweetMarkerStyle, TweetMarkerStyleHover, K_SIZE};
