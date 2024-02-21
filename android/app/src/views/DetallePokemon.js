import React, { useState, useEffect } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style_pokemon } from '../styles/detallePokemon';

const DetallePokemon = ({ route }) => {
    const { pokemonName } = route.params;
    const [pokemonData, setPokemonData] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setPokemonData(data));
    }, [pokemonName]);

    return (
        <View style={style_pokemon.container}>
            <View style={style_pokemon.header}>
                <Image source={require('../imgs/logoPM.png')} style={style_pokemon.logo} />
            </View>

            <View style={{}}>
                <Text style={{ fontSize: 24, color: '#717171', textAlign: 'center' }}>Pokémon Information</Text>
            </View>

            <ScrollView style={{ flex: 1, padding: 16 }}>
                {pokemonData && (
                    <>
                        {}
                        <View style={{ backgroundColor: '#fac915', padding: 16, borderRadius: 8, borderWidth: 3, borderColor: 'blue', marginBottom: 16 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: pokemonData.sprites.front_default }}
                                    style={style_pokemon.pokemonImage}
                                />
                                <View style={{ marginLeft: 16 }}>
                                    <Text style={style_pokemon.pokemonName}>{pokemonData.name}</Text>
                                    <Text style={style_pokemon.featureLabel}>Fearures:</Text>
                                    <Text style={style_pokemon.featureValue}>-Code: {pokemonData.id}</Text>
                                    <Text style={style_pokemon.featureValue}>-Height: {pokemonData.height}</Text>
                                    <Text style={style_pokemon.featureValue}>-Weight: {pokemonData.weight}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Rectángulo para los tipos */}
                        <View style={style_pokemon.typesInfo}>
                            <Text style={style_pokemon.typesLabel}>Types to belong:</Text>
                        </View>

                        {pokemonData.types.map((type, index) => (
                            <Text key={index} style={style_pokemon.moveName}>
                                {type.type.name}
                            </Text>
                        ))}

                        {/* Rectángulo para los movimientos */}
                        <View style={style_pokemon.movesInfo}>
                            <Text style={style_pokemon.movesLabel}>Movimientos:</Text>
                        </View>

                        {pokemonData.moves.map((move, index) => (
                            <Text key={index} style={style_pokemon.moveName}>
                                {move.move.name}
                            </Text>
                        ))}
                    </>
                )}
            </ScrollView>
        </View>
    );
};

export default DetallePokemon;