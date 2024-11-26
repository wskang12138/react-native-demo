import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useWindowDimensions } from 'react-native';

const DetailsScreen = ({ route, navigation }: any) => {
  const { itemId, message } = route.params || {};
  const { width, height } = useWindowDimensions();

  const handleConsoleMessage = (event: any) => {
    console.log(event.nativeEvent.data); // 这里会打印你在 HTML 文件中 console.log 的内容
  }

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://juejin.cn/' }}
        javaScriptEnabled={true}
        onMessage={handleConsoleMessage}
        domStorageEnabled={true}
        useWebKit={true}
        scalesPageToFit={false}
        allowFileAccess={true}
        style={{ width, height }}
        onError={(e) => console.log('Error loading HTML:', e.nativeEvent)}
        startInLoadingState={true}
        renderLoading={() => <View><Text>加载中...</Text></View>}
        onLoadStart={(e) => console.log('Loading URL:', e.nativeEvent.url)}
        onLoadEnd={() => console.log('HTML loaded')}
        allowsInlineMediaPlayback={true} // 允许嵌入的多媒体播放
        mixedContentMode="always" // 允许加载非 HTTPS 内容
        allowingReadAccessToURL="*"
        decelerationRate={'normal'}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.log('HTTP Error: ', nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  mainContent: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  leftPanel: {
    width: '45%',
    backgroundColor: '#123c76',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
  },
  attendanceBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  attendancelobo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  attendanceText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
