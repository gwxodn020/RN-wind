import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useIsFocused } from '@react-navigation/native';
import HomeIcon from '../../../assets/Home1.svg';

export default function MyPage() {
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isFocused]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-[#F4F5F7]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="px-5 mt-6 mb-3 text-2xl font-extrabold text-black">
          프로필
        </Text>

        <SkeletonPlaceholder
          backgroundColor="#E0E0E0"
          highlightColor="#F7F7F7"
        >
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding={20}
            marginHorizontal={20}
            borderRadius={16}
            marginBottom={10}
          >
            <SkeletonPlaceholder.Item
              width={56}
              height={56}
              borderRadius={28}
            />
            <SkeletonPlaceholder.Item flex={1} marginLeft={15}>
              <SkeletonPlaceholder.Item
                width={120}
                height={16}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                width={100}
                height={14}
                borderRadius={4}
                marginTop={6}
              />
              <SkeletonPlaceholder.Item
                width={140}
                height={12}
                borderRadius={4}
                marginTop={6}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            marginHorizontal={20}
            padding={20}
            borderRadius={16}
            marginBottom={20}
          >
            {[1, 2, 3, 4].map((i) => (
              <SkeletonPlaceholder.Item
                key={i}
                width={50}
                height={50}
                borderRadius={10}
              />
            ))}
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            marginHorizontal={20}
            borderRadius={16}
            marginBottom={20}
          >
            <SkeletonPlaceholder.Item
              height={45}
              borderBottomWidth={1}
              borderColor="#DADADA"
              marginHorizontal={10}
              marginVertical={6}
            />
            <SkeletonPlaceholder.Item
              height={45}
              marginHorizontal={10}
              marginBottom={10}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            marginHorizontal={20}
            borderRadius={16}
            marginBottom={20}
          >
            <SkeletonPlaceholder.Item
              height={45}
              borderBottomWidth={1}
              borderColor="#DADADA"
              marginHorizontal={10}
              marginVertical={6}
            />
            <SkeletonPlaceholder.Item
              height={45}
              borderBottomWidth={1}
              borderColor="#DADADA"
              marginHorizontal={10}
              marginVertical={6}
            />
            <SkeletonPlaceholder.Item
              height={45}
              marginHorizontal={10}
              marginBottom={10}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            height={45}
            marginHorizontal={20}
            borderRadius={16}
            marginBottom={40}
          />
        </SkeletonPlaceholder>
      </ScrollView>
    </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#F4F5F7]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="px-5 mt-6 mb-3 text-2xl font-extrabold text-black">
          프로필
        </Text>
        <View
          className="flex-row items-center justify-between p-5 mx-5 bg-white shadow-sm rounded-2xl"
          style={{ elevation: 2 }}
        >
          <Image source={require('../../../assets/logo1.jpg')} className="mr-4 w-14 h-14" />
          <View className="flex-row items-start justify-between flex-1">
            <View>
              <Text className="text-lg font-bold text-gray-900">윤재한 학생</Text>
              <Text className="mt-1 text-base font-semibold text-gray-700">2학년 2반 14번</Text>
            </View>

            <View className="items-end">
              <TouchableOpacity onPress={() => console.log('내 정보 보기')}>
                <Text className="mb-1 text-sm text-gray-400">내 정보 보기 ›</Text>
              </TouchableOpacity>
              <Text className="text-sm font-semibold text-gray-700">
                담임 / 박수진 선생님
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between p-4 mx-5 mt-3 bg-white shadow-sm rounded-2xl">
          {['잠', '자', '고', '르르르'].map((label, i) => (
            <View key={i} className="items-center justify-center flex-1 py-2">
              <HomeIcon />
              <Text className="text-sm text-gray-500">{label}</Text>
            </View>
          ))}
        </View>

        <View className="mx-5 mt-6">
          <Text className="mb-2 text-sm font-semibold text-gray-400">일반</Text>
          <View className="overflow-hidden bg-white shadow-sm rounded-2xl">
            <TouchableOpacity
              className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
              onPress={() => console.log('비밀번호 설정')}
            >
              <Text className="text-gray-800">비밀번호 설정</Text>
              <Text className="text-gray-300">{'›'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center justify-between px-4 py-4"
              onPress={() => console.log('언어 변경')}
            >
              <Text className="text-gray-800">언어 변경</Text>
              <Text className="text-gray-300">{'›'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mx-5 mt-6">
          <Text className="mb-2 text-sm font-semibold text-gray-400">정보</Text>
          <View className="overflow-hidden bg-white shadow-sm rounded-2xl">
            <TouchableOpacity
              className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
              onPress={() => console.log('공지사항')}
            >
              <Text className="text-gray-800">공지사항</Text>
              <Text className="text-gray-300">{'›'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between px-4 py-4 border-b border-gray-100"
              onPress={() => console.log('개인정보 약관 동의')}
            >
              <Text className="text-gray-800">개인정보 약관 동의</Text>
              <Text className="text-gray-300">{'›'}</Text>
            </TouchableOpacity>

            <View className="flex-row items-center justify-between px-4 py-4">
              <Text className="text-gray-800">앱 버전</Text>
              <Text className="text-sm text-gray-500">1.0.0</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => console.log('로그아웃')}
          className="py-4 mx-5 mt-4 mb-10 bg-white shadow-sm rounded-xl"
        >
          <Text className="font-semibold text-center text-red-500">로그아웃</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
