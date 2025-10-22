import { View, Text, Image, TouchableOpacity } from 'react-native';
import{ useNavigation } from '@react-navigation/native';
export default function Card1() {
  const navigation = useNavigation();
  const handleApplication = () => {
    navigation.navigate('ApplicationPage');
  }
  return (
    <View className="bg-[#02AD85] rounded-2xl p-5 mx-4 mt-4 shadow-md">
      {/* 상단 영역 */}
      <View className="flex-row justify-between items-start">
        {/* 왼쪽: 로고 + 텍스트 */}
        <View className="flex-row items-center space-x-3">
          <Image
            source={require('../../../../assets/logo1.jpg')}
            className="w-24 h-24"
          />
          <View className="ml-3">
            <Text className="text-white text-lg font-semibold">
              이번 달 외출 신청
            </Text>
            <Text className="text-white text-3xl font-extrabold mt-1">6개</Text>
          </View>
        </View>
        {/* 오른쪽: 점 세개 */}
        <TouchableOpacity>
          <Text className="text-white text-2xl">⋯</Text>
        </TouchableOpacity>
      </View>
      {/* 하단: 버튼 */}
      <View className="items-end mt-6">
        <TouchableOpacity className="bg-[#009B75] px-5 py-2 rounded-full" onPress={handleApplication}>
          <Text className="text-white font-semibold">신청</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
