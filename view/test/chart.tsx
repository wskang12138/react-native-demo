import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from 'victory-native';
import _ from 'lodash';

type DataPoint = {
  x: number | string;
  y: number;
};

const AnimatedBarChart = () => {
    
    const [data] = useState<DataPoint[]>([
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 20 },
        { x: 'Mar', y: 30 },
        { x: 'Apr', y: 40 },
        { x: 'May', y: 50 },
        { x: 'Jun', y: 60 },
        { x: 'Jul', y: 70 },
    ]);


    return (
        <View style={styles.container}>
            <VictoryChart
                width={650}  // Set chart width
                height={350} // Set chart height
                animate={{ duration: 500 }}  // Chart animation duration
                domainPadding={{ x: 20 }}  // Padding around the X-axis
                theme={VictoryTheme.clean}
            >
                {/* X-axis with white labels */}
                <VictoryAxis
                    style={{
                        tickLabels: { fill: 'white' }  // Set X axis tick labels to white
                    }}
                />
                {/* Y-axis with white labels */}
                <VictoryAxis
                    dependentAxis
                    style={{
                        tickLabels: { fill: 'white' }  // Set Y axis tick labels to white
                    }}
                />
                <VictoryBar
                    data={data}
                    style={{
                        data: { fill: 'white', width: 14 }  // Set bar color and width
                    }}
                    animate={{
                        duration: 500,
                        onExit: {
                            duration: 500,
                            before: () => ({
                                _y: 0,  // Set Y position to 0 for exit animation
                                fill: 'orange',  // Set exit color
                                label: 'BYE'  // Optionally set a label on exit
                            }),
                        },
                    }}
                />
            </VictoryChart>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 400,  // Adjust container height
    },
});

export default AnimatedBarChart;
