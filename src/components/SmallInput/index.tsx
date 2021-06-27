import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { TextInput, TextInputProps } from 'react-native';

export function SmallInput( { ...rest }: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            keyboardType="numeric"
            {...rest}
        />
    );
}