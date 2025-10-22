import { View, Text, TouchableOpacity } from 'react-native';
import { SquareX } from 'lucide-react-native';

export default function Card2() {
  return (
    <TouchableOpacity className="bg-white rounded-2xl px-5 py-10 m-5 flex-row items-center shadow-sm mt-0">
      {/* 아이콘 */}
      <View className="p-3 rounded-xl mr-4">
        <SquareX color={'#02AD85'} size={32} />
      </View>

      {/* 텍스트 */}
      <View>
        <Text className="text-gray-600 text-sm mb-1">거절된 외출 신청 목록과 거절 사유 확인</Text>
        <Text className="text-black text-2xl font-extrabold">거절된 신청 목록</Text>
      </View>
    </TouchableOpacity>
  );
}
