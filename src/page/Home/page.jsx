import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Home/Header/item';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Calendar from '../../../assets/calender.svg'
import X from '../../../assets/X.svg'
export default function HomePage() {
  const navigation = useNavigation();
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
            <TouchableOpacity className="bg-[#6ACDB4] w-full py-3 rounded-xl mt-10" onPress={() => navigation.navigate('ApplicationPage')}>
              <Text className="text-base font-semibold text-center text-white">
                신청하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between mx-5 mt-5">
          <TouchableOpacity
            className="items-start justify-center flex-1 p-8 py-8 mr-2 bg-white shadow-sm rounded-2xl"
            onPress={() => navigation.navigate('CalendarPage')}
          >
            <Calendar color={'#02AD85'} size={32} />
            <Text className="mt-2 text-sm text-gray-600">목록부터</Text>
            <Text className="text-lg font-bold text-black">외출 일정 보기</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-start justify-center flex-1 p-8 py-8 ml-2 bg-white shadow-sm rounded-2xl">
            <X color={'#02AD85'} size={32} />
            <Text className="mt-2 text-sm text-gray-600">왜 안되나요?</Text>
            <Text className="text-lg font-bold text-black">
              거절된 신청 목록
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mx-5 mt-5 overflow-hidden shadow-sm rounded-2xl">
          {/* <Image
            source={require('../../../assets/mapSample.jpg')}
            className="w-full h-56"
            resizeMode="cover"
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
