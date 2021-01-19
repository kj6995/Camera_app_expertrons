import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';

const Post = ({post}) => {
  const [videoUri, setVideoUri] = useState('');

  const [paused, setPaused] = useState(true);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: post.videoUri,
          }}
          style={styles.video}
          onError={(e) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 48,
  },
});

export default Post;
