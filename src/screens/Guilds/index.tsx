import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Rumo ao Topo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '3',
            name: 'Rumo ao Topo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '4',
            name: 'Rumo ao Topo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '5',
            name: 'Rumo ao Topo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '6',
            name: 'Rumo ao Topo',
            icon: 'image.png',
            owner: false
        }
    ]

    return (

        <View style={styles.container}>
            <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>(
                    <Guild 
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                contentContainerStyle={{ paddingBottom: 68, paddingTop:103 }}
                style={styles.guilds}
            />
        </View>
    );
}