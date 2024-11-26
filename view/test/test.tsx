import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Footer from './footer';
import MyCarousel from './carousel';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import TextBroadcast from './text';
import AnimatedChart from './chart';
import WebView from 'react-native-webview';
const App = () => {

    const scheduleData = [
        { time: '09:05', subject: '语文课程', location: '3楼 303室' },
        { time: '10:20', subject: '数学课程', location: '3楼 303室' },
        { time: '11:15', subject: '英语课程', location: '3楼 303室' },
        { time: '14:15', subject: '英语课程', location: '3楼 303室' },
        { time: '15:05', subject: '美术课程', location: '3楼 303室' },
        { time: '17:00', subject: '音乐课程', location: '3楼 303室' },
    ];

    useEffect(() => {
        setTimeout(() => {
            LottieSplashScreen.hide();
        }, 0)
    }, [])

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>3教303室</Text>
                <View style={styles.headerRight}>
                    <Text style={styles.headerDate}>2024/10/16 星期三</Text>
                    <Text style={styles.headerTime}>15:29</Text>
                </View>
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
                {/* Left Panel */}
                <View style={styles.leftPanel}>
                    <View style={styles.attendanceBox}>
                        <Text style={styles.attendanceText}>学生风采</Text>
                    </View>
                    <View style={styles.attendancelobo}>
                        <MyCarousel layout='stack' />
                    </View>
                    <View style={styles.attendanceBox}>
                        <Text style={styles.attendanceText}>人数统计</Text>
                    </View>
                    <View style={styles.attendancelobo1}>
                        {/* <MyCarousel /> */}
                        <AnimatedChart />
                    </View>
                </View>

                {/* Schedule */}
                <View style={styles.scheduleContainer}>
                    <Text style={styles.sectionTitle}>课程预告</Text>
                    <FlatList
                        data={scheduleData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.scheduleItem} key={index} >
                                <Text style={styles.scheduleTime}>{item.time}</Text>
                                <Text style={styles.scheduleSubject}>{index == 0 ? <TextBroadcast fullText={item.subject} /> : item.subject}</Text>
                                <Text style={styles.scheduleLocation}>{item.location}</Text>
                            </View>
                        )}
                    />
                    <View  style={styles.webContainer}>
                        <WebView
                            originWhitelist={['*']}
                            source={{ uri: 'file:///android_asset/Web.bundle/index.html' }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            useWebKit={true}
                            scalesPageToFit={false}
                            allowFileAccess={true}
                            onError={(e) => console.log('Error loading HTML:', e.nativeEvent)}
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
                </View>
            </View>

            {/* Footer Icons with 3D effect */}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a2851',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#123c76',
    },
    headerText: {
        color: '#ffffff',
        fontSize: 25,
    },
    headerRight: {
        alignItems: 'flex-end',
    },
    headerDate: {
        color: '#a0c0e8',
        fontSize: 14,
    },
    headerTime: {
        color: '#ffffff',
        fontSize: 18,
    },
    mainContent: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
    },
    leftPanel: {
        width: '35%',
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
    attendancelobo1: {
        alignItems: 'center',
        marginBottom: 20,
    },
    attendanceText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    subText: {
        color: '#a0c0e8',
        fontSize: 25,
    },
    teachersInfo: {
        alignItems: 'center',
    },
    sectionTitle: {
        color: '#ffffff',
        marginBottom: 5,
        fontSize: 25
    },
    teacherIcons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    teacherIcon: {
        fontSize: 24,
    },
    scheduleContainer: {
        flex: 1,
        backgroundColor: '#0f3b74',
        padding: 35,
        borderRadius: 8,
    },
    scheduleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#2a4f7b',
    },
    scheduleTime: {
        color: '#ffffff',
        fontSize: 20,
    },
    scheduleSubject: {
        color: '#b0d4ff',
        fontSize: 20,
    },
    scheduleLocation: {
        color: '#ffffff',
        fontSize: 20,
    },
    webContainer:{
        width:'100%',
        height:420
    }
});

export default App;
