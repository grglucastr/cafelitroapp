import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';



const LitersSelect = () => {

    const [liter, setLiter] = useState(1);

    return (
        <View>
            <Text>Quantos litros deseja solicitar?</Text>
            <Text> { liter } </Text>
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={1}
                maximumValue={30}
                step={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(val) => setLiter(val)}
                value={liter}
            />
            
        </View>
    );
};

export default LitersSelect;