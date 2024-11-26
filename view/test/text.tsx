import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const TextBroadcast = (props: any) => {
  const { fullText = '' } = props;

  // 创建一个动画值来控制文本的偏移位置
  const translateX = new Animated.Value(90); // 初始位置在屏幕右侧

  useEffect(() => {
    // 使用 loop 来持续动画
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(translateX, {
          toValue: -90,  // 文字从右侧进入并向左退出
          duration: 2500,  // 动画持续时间
          useNativeDriver: true,  // 优化动画性能
        })
      ).start();
    };

    // 启动动画
    startAnimation();

  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.textContainer, { transform: [{ translateX }] }]}
      >
        <Text style={styles.text}>{fullText}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',  // 确保超出边界的文字不会显示
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TextBroadcast;
