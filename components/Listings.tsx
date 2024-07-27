import { 
  View, 
  Text, 
  FlatList, 
  ListRenderItem, 
  TouchableOpacity, 
  StyleSheet,
  Image
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Listing } from '@/interfaces/listing';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    listings: any[];
    category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
      console.log('RELOAD LISTINGS', items.length);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
      <View style={styles.listing}>
          {item.medium_url ? (
            <Image source={{ uri: item.medium_url }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder} />
          )}
          <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30}}>
            <Ionicons name='heart-outline' size={24} color={'#000'}/>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, fontFamily: 'mon-sb'}}>{item.name}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Ionicons name='star' size={16} />
              {item.review_scores_rating != null ? (
                <Text style={{ fontFamily: 'mon-sb'}}>
                  {item.review_scores_rating / 20}
                </Text>
              ) : (
                <Text style={{ fontFamily: 'mon-sb'}}>N/A</Text>
              )}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )

  return (
    <View style={defaultStyles.container}>
      <FlatList 
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
  },
})

export default Listings;