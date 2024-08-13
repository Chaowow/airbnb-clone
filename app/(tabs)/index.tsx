import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingsData from '@/assets/data/air-bnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import listingDataGeo from '@/assets/data/airbnb-listings.geo.json';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <View style={{ flex: 1, marginTop: 130 }}>
        <Stack.Screen 
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>
          }}
        />
        {/* <Listings listings={items} category={category}/> */}
        <ListingsMap listings={listingDataGeo} />
        <ListingsBottomSheet listings={items} category={category} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Page;