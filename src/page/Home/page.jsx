import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import Header from '../../components/Home/Header/item';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Calendar from '../../../assets/calender.svg';
import X from '../../../assets/X.svg';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { TouchableWithoutFeedback } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [myLocation, setMyLocation] = useState(null);
  const watchIdRef = useRef(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    async function requestPermissionAndTrack() {
      const granted = await requestPermission();
      if (!granted) return;

      Geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
          setMyLocation({ latitude, longitude });
          console.log('현재 위치:', latitude, longitude);
        },
        err => console.log('현재 위치 실패:', err),
        { enableHighAccuracy: false, timeout: 30000, maximumAge: 0 },
      );

      watchIdRef.current = Geolocation.watchPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setMyLocation({ latitude, longitude });
          setRegion({
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        },
        err => console.log('위치 업데이트 실패:', err),
        { enableHighAccuracy: true, distanceFilter: 1 },
      );
    }

    requestPermissionAndTrack();

    return () => {
      if (watchIdRef.current !== null) {
        Geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  async function requestPermission() {
    if (Platform.OS === 'android') {
      try {
        const results = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);
        const fine =
          results[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];
        const coarse =
          results[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION];
        const ok = fine === 'granted' || coarse === 'granted';
        console.log(ok ? '위치 권한 허용됨' : '위치 권한 거부됨');
        return ok;
      } catch (err) {
        console.log('권한 요청 에러:', err);
        return false;
      }
    }
    return true;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />

        <View className="flex-col p-5 mx-5 mt-3 bg-white shadow-sm h-60 rounded-2xl">
          <Text className="mb-6 text-2xl font-extrabold text-black">
            내 외출증
          </Text>
          <View className="items-center justify-center flex-1 mt-8 space-y-6">
            <Text className="text-sm font-semibold text-gray-500">
              신청된 외출이 없습니다.
            </Text>
            <TouchableOpacity
              className="bg-[#6ACDB4] w-full py-3 rounded-xl mt-10"
              onPress={() => navigation.navigate('ApplicationPage')}
            >
              <Text className="text-base font-semibold text-center text-white">
                신청하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between mx-5 mt-5">
          <TouchableOpacity
            className="items-start justify-center flex-1 p-8 mr-2 bg-white shadow-sm rounded-2xl"
            onPress={() => navigation.navigate('CalendarPage')}
          >
            <Calendar color={'#02AD85'} size={32} />
            <Text className="mt-2 text-sm text-gray-600">목록부터</Text>
            <Text className="text-lg font-bold text-black">외출 일정 보기</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-start justify-center flex-1 p-8 ml-2 bg-white shadow-sm rounded-2xl">
            <X color={'#02AD85'} size={32} />
            <Text className="mt-2 text-sm text-gray-600">왜 안되나요?</Text>
            <Text className="text-lg font-bold text-black">
              거절된 신청 목록
            </Text>
          </TouchableOpacity>
        </View>

        <View className="p-2 mx-5 mt-5 overflow-hidden bg-white shadow-sm rounded-2xl">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('MapFullPage')}
          >
            {isFocused && region ? (
              <View style={{ borderRadius: 10, overflow: 'hidden' }}>
                <MapView
                  style={{ width: '100%', height: 200 }}
                  region={region}
                  showsUserLocation
                  followsUserLocation
                  scrollEnabled={false}
                  zoomEnabled={false}
                >
                  {myLocation && (
                    <Marker
                      coordinate={myLocation}
                      title="현재 위치"
                      pinColor="#02AD85"
                    />
                  )}
                </MapView>
              </View>
            ) : (
              <View className="items-center justify-center w-full h-56 bg-gray-200">
                <Text className="text-gray-500">위치 불러오는 중...</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
