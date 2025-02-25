import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import ImageCard from '../components/ImageCard';
import {fetchImages} from '../services/api';

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadMoreImages();
  }, []);

  const loadMoreImages = async () => {
    if (loading) return;
    setLoading(true);

    const newImages = await fetchImages(page);
    setImages([...images, ...newImages]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ImageCard imageUrl={item.url} />}
      onEndReached={loadMoreImages}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
}
