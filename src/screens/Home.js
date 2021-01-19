import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../components/Post';
import data from '../../data/posts';

const Home = () => {
  const [posts, setPosts] = useState(data);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 48}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
