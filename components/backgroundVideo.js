// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';

// const BackgroundVideo = () => {

// const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});

//   return (
//     <View style={styles.container}>
//     <Video
//       ref={video}
//       style={styles.video}
//       source={{
//         uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//       }}
//       useNativeControls
//       resizeMode={ResizeMode.CONTAIN}
//       isLooping
//       onPlaybackStatusUpdate={status => setStatus(() => status)}
//     />
//     <View style={styles.buttons}>
//       <Button
//         title={status.isPlaying ? 'Pause' : 'Play'}
//         onPress={() =>
//           status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
//         }
//       />
//     </View>
//   </View>
//   );
// };

// var styles = StyleSheet.create({
//   backgroundVideo: {
//     height: '100%',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   container: {
//     flex: 1
//   }
// });

// export default BackgroundVideo;