import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles.scss';

const LitersSelect = () => {

    const [liter, setLiter] = useState(1);

    const window = Dimensions.get('window');
    const width = window.width;

    return (
        <View style={styles.liter}>
            <Text style={styles.liter__title}>Quantos litros deseja solicitar?</Text>
            <Text style={styles.liter__value}> { liter }L </Text>
            <Slider
                style={[styles.liter__slider, {width: (width-5), height: 50}]}
                minimumValue={1}
                maximumValue={30}
                step={1}
                minimumTrackTintColor="#ccc"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setLiter(val)}
                value={liter}
            />

            <TouchableOpacity style={styles.liter__finish}>
                <Text style={styles.finish__text}>
                    Finalizar
                </Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default LitersSelect;