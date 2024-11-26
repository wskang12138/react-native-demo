import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

type CarouselItem = {
    title: string;
    image: string;
};

const TestCarousel = (props:any) => {
    const { layout="default" } = props
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const carouselItems: CarouselItem[] = [
        { title: 'Imagesss1 ', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 2', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 3', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 4', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 5 ', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 6', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 7', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
        { title: 'Image 8', image: 'https://q6.itc.cn/q_70/images03/20240329/f36a107e7ee5464384eaabfa0f3cdb04.jpeg' },
    ];

    const renderItem = ({ item,index }: { item: CarouselItem,index:number }) => (
        <View style={styles.card} key={index}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                layout={layout}
                ref={carouselRef}
                data={carouselItems}
                sliderWidth={600}
                itemWidth={600}
                autoplay={true} // 启用自动轮播
                loop={true} // 循环播放
                // layout={'stack'} 
                autoplayDelay={2000}
                layoutCardOffset={18} 
                renderItem={renderItem}
                onSnapToItem={(index: any) => setActiveIndex(index)}
            />
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{ backgroundColor: '#002B65' }}
                dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#002B65',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 250,
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    indexText: {
        marginTop: 10,
        color: '#FFF',
        fontSize: 16,
    },
});

export default TestCarousel;
