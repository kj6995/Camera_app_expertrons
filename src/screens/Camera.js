import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();

  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync({
        maxDuration: 30,
        mute: false,
      });
      console.log(data);
      //navigation.navigate('CreatePost', {VideoUri: data.uri});
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
        style={styles.preview}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <TouchableOpacity
        onPress={onRecord}
        style={isRecording ? styles.buttonStop : styles.buttonRecord}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonRecord: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4242',
    marginVertical: 10,
  },
  buttonStop: {
    alignSelf: 'center',
    height: 30,
    width: 30,
    borderRadius: 3,
    backgroundColor: 'white',
    marginVertical: 20,
  },
});

export default Camera;
