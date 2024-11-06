import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

// import useFeed from '../data/hooks/useFeed'

export default props => {
    // const { posts, fetchPosts } = useFeed()

    // useEffect(() => {
    //     fetchPosts()
    // }, [])

        const posts = [{
            id: Math.random(),
            nickname: "Rafael Filho",
            email: 'rafael@fmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Sheldon',
                comment: 'Stunning!'
            }, {
                nickname: 'Ana Julia',
                comment: 'Foto lindaaa!'
            }]
        }, {
            id: Math.random(),
            nickname: "Francisco Neto",
            email: 'francisco@fmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]


    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={posts} keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <Post key={item.id} {...item} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})