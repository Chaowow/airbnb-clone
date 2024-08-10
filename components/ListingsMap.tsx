import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '@/interfaces/listingGeo';
import { useRouter } from 'expo-router';

interface Props {
  listings: any;
};

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9
};

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: ListingGeo) => {
      router.push(`/listing/${item.properties.id}`);
  };

  return (
    <View style={defaultStyles.container}>
      <MapView 
        style={StyleSheet.absoluteFill} 
        showsUserLocation 
        showsMyLocationButton 
        initialRegion={INITIAL_REGION}
      >
        {listings.features.map((item: ListingGeo) => (
            <Marker 
                key={item.properties.id}
                onPress={() => onMarkerSelected(item)}
                coordinate={{
                    latitude: +item.properties.latitude,
                    longitude: +item.properties.longitude
            }} />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingsMap;