// PostsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the JSONPlaceholder API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <LinearGradient colors={['#dfc7fb', '#624980']} style={styles.gradientContainer}>

    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  postContainer: {
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  postBody: {
    marginTop: 8,
    color: '#000',
  },
});

export default PostsScreen;
