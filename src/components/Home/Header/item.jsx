import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bell, QrCode } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader() {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-between items-center px-6 py-4 bg-[#F5F5F5]">
      <View className="flex-row items-center">
        <Text className="text-2xl font-extrabold text-black">홈</Text>
        <View className="w-px h-6 mx-3 bg-gray-300" />
        <Text className="text-2xl font-bold text-gray-400">외출증 목록</Text>
      </View>

      <View className="flex-row items-center gap-5 space-x-5">
        <TouchableOpacity onPress={() => navigation.navigate('QrPage')}>
          <QrCode color={'#000'} size={28} strokeWidth={1.5}/>
        </TouchableOpacity>
        <TouchableOpacity className="relative">
          <Bell color={'#000'} size={28} strokeWidth={1.5}/>
          <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
