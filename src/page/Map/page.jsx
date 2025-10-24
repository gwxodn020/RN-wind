// import React, { useEffect, useState, useRef } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import { useNavigation } from '@react-navigation/native';

// export default function MapFullPage() {
//   const [coords, setCoords] = useState([]);
//   const [region, setRegion] = useState(null);
//   const mapRef = useRef(null);
//   const watchIdRef = useRef(null);
//   const navigation = useNavigation();

//   useEffect(() => {
//     Geolocation.getCurrentPosition(
//       pos => {
//         const { latitude, longitude } = pos.coords;
//         const newRegion = {
//           latitude,
//           longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         };
//         setRegion(newRegion);
//         setCoords([{ latitude, longitude }]);
//         console.log('초기 위치:', latitude, longitude);
//         mapRef.current?.animateToRegion(newRegion, 1000);
//       },
//       err => console.log('초기 위치 실패:', err),
//       { enableHighAccuracy: false, timeout: 30000, maximumAge: 1000 }
//     );

//     watchIdRef.current = Geolocation.watchPosition(
//       pos => {
//         const { latitude, longitude } = pos.coords;
//         const newRegion = {
//           latitude,
//           longitude,
//           latitudeDelta: 0.01,
//           longitudeDelta: 0.01,
//         };
//         setCoords(prev => [...prev, { latitude, longitude }]);
//         setRegion(newRegion);
//         mapRef.current?.animateToRegion(newRegion, 1000);
//       },
//       err => console.log('위치 업데이트 실패:', err),
//       { enableHighAccuracy: true, distanceFilter: 1 }
//     );

//     return () => {
//       if (watchIdRef.current !== null) Geolocation.clearWatch(watchIdRef.current);
//     };
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       {region ? (
//         <MapView
//           ref={mapRef}
//           provider="google"
//           style={{ flex: 1 }}
//           region={region}
//           showsUserLocation
//           followsUserLocation
//           zoomEnabled
//           showsCompass
//         >
//           {coords.length >= 2 && (
//             <Polyline coordinates={coords} strokeWidth={4} strokeColor="#02AD85" />
//           )}
//           {coords.length > 0 && (
//             <Marker
//               coordinate={coords[coords.length - 1]}
//               title="현재 위치"
//               pinColor="#02AD85"
//             />
//           )}
//         </MapView>
//       ) : (
//         <View style={styles.loadingContainer}>
//           <Text style={{ color: '#555' }}>위치 불러오는 중...</Text>
//         </View>
//       )}
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
//         <Text style={{ color: 'white', fontWeight: 'bold' }}>닫기</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   closeButton: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     backgroundColor: '#02AD85',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderRadius: 12,
//   },
//   loadingContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#eee',
//   },
// });
import React, { useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useNavigation } from '@react-navigation/native';

export default function MapFullPage() {
  const [coords, setCoords] = useState([]);
  const [region, setRegion] = useState(null);
  const mapRef = useRef(null);
  const watchIdRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setRegion(newRegion);
        setCoords([{ latitude, longitude }]);
        console.log('초기 위치:', latitude, longitude);
        mapRef.current?.animateToRegion(newRegion, 1000);
      },
      err => console.log('초기 위치 실패:', err),
      { enableHighAccuracy: false, timeout: 30000, maximumAge: 0 }
    );
    watchIdRef.current = Geolocation.watchPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setCoords(prev => {
          const last = prev[prev.length - 1];
          if (!last || last.latitude !== latitude || last.longitude !== longitude) {
            return [...prev, { latitude, longitude }];
          }
          return prev;
        });

        setRegion(newRegion);
        mapRef.current?.animateToRegion(newRegion, 500);
      },
      err => console.log('위치 업데이트 실패:', err),
      { enableHighAccuracy: true, distanceFilter: 0, interval: 2000 }
    );

    return () => {
      if (watchIdRef.current !== null) Geolocation.clearWatch(watchIdRef.current);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {region ? (
        <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          followsUserLocation
          zoomEnabled
          showsCompass
        >
          {coords.length >= 2 && (
            <Polyline coordinates={coords} strokeWidth={10} strokeColor="#02AD85" />
          )}
          {coords.length > 0 && (
            <Marker
              coordinate={coords[coords.length - 1]}
              title="현재 위치"
              pinColor="#02AD85"
            />
          )}
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text style={{ color: '#555' }}>위치 불러오는 중...</Text>
        </View>
      )}

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>닫기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#02AD85',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
});
