import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation<any>();
    const featureIcons = [
        { title: '课堂测验', icon: '📊' },
        { title: '校园卫生', icon: '🏫' },
        { title: '成长足迹', icon: '📈' },
        { title: '教师信息', icon: '👩‍🏫' },
    ];

    return (
        <View  style = { styles.footer } >
        {
            featureIcons.map((feature, index) => (
                <TouchableOpacity key={index} style={styles.iconContainer} onPress={() =>  navigation.navigate('Details')}>
                    {/* 3D效果的背景渐变 */}
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.gradientBackground}
                    >
                        <View style={styles.iconWrapper}>
                            <Text style={styles.icon}>{feature.icon}</Text>
                        </View>
                    </LinearGradient>
                    <Text style={styles.iconText}>{feature.title}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        paddingLeft: '20%',
        paddingRight: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: '#082345',
    },
    iconContainer: {
        alignItems: 'center',
    },
    gradientBackground: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 10, // Android 3D效果的阴影
    },
    iconWrapper: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#ffffff10',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        color: '#ffffff',
        resizeMode: 'contain',
    },
    iconText: {
        color: '#ffffff',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Footer;
