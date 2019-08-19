import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles.scss';

const LitersSelect = ({navigation}) => {

    const [liter, setLiter] = useState(1);

    const window = Dimensions.get('window');
    const width = window.width;

    const user = navigation.getParam('user');
    const coffee = navigation.getParam('item');


    return (
        <View style={{flex: 1, justifyContent: 'space-around'}}>
            <Text>{user.name} -{coffee.title}</Text>
            <Text style={[styles.header, styles.header_3]}>Quantos litros deseja solicitar?</Text>
            
            <View>
                <Text style={[styles.header, styles.header_1]}> { liter }L </Text>
                <Slider
                    style={[styles.slider, {width: (width-70), height: 50}]}
                    minimumValue={1}
                    maximumValue={30}
                    step={1}
                    minimumTrackTintColor="#ccc"
                    maximumTrackTintColor="#000000"
                    onValueChange={(val) => setLiter(val)}
                    value={liter}
                />
            </View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('CoffeeEnd', {user, coffee, liter})}
                style={styles.btn}>
                <Text>
                    Finalizar
                </Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default LitersSelect;