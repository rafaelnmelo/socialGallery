import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

export default props => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <Author email={props.email} nickname={props.nickname} />
            <Comments comments={props.comments} />
            <AddComment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})