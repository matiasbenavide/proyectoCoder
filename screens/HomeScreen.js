import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { useSelector, useDispatch, connect } from "react-redux";

import { selectCategory } from '../store/actions/category.actions';

import GridItem from '../components/GridItem';
import ShowCart from '../components/ShowCart';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.list);

    const handleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Categories', {
            name: item.title
        })
    }

    const renderGridItem = ({ item }) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
    )

    return (
        <View>
            <FlatList
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderGridItem}
                numColumns={2}
            />
            <ShowCart navigation={navigation} />
        </View>
    )
}

export default connect()(HomeScreen);