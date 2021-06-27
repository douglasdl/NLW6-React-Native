import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

export function GuildIcon() {
    const uri = 'https://i2.wp.com/cdn.getapk.app/imgs/6/f/7/6f7e72878cde97fc8c850733da71a24e_icon.png';
    return (
        <Image 
            source={{ uri }}
            style={ styles.image }
            resizeMode='cover'

        />
    )
}