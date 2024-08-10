import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';
import { defaultStyles } from '@/constants/Styles';
import { ListingGeo } from '@/interfaces/listingGeo';
import { useRouter } from 'expo-router';
import MapView from 'react-native-map-clustering';

interface Props {
  listings: any;
};

const INITIAL_REGION = {
  latitude: 52.52,
  longitude: 13.41,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04
};

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: ListingGeo) => {
      router.push(`/listing/${item.properties.id}`);
  };

  return (
    <View style={defaultStyles.container}>
      <MapView
        animationEnabled={false} 
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
            }} >
            <View style={styles.marker}>
              <Text style={styles.markerText}>
                € {item.properties.price}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    padding: 6,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10
    }
  },
  markerText: {
    fontSize: 14,
    fontFamily: 'mon-sb'
  }
});

export default ListingsMap;