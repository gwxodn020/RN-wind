import { View, Text, TouchableOpacity } from 'react-native';
import { CalendarDays } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
export default function Card2() {
    const navigation = useNavigation();
    const handleCalendar = () => {
        navigation.navigate('CalendarScreen');
    }
  return (
    <TouchableOpacity className="bg-white rounded-2xl px-5 py-10 m-5 flex-row items-center shadow-sm"  onPress={handleCalendar}>
      {/* 아이콘 */}
      <View className="p-3 rounded-xl mr-4">
        <CalendarDays color={'#02AD85'} size={32} />
      </View>

      {/* 텍스트 */}
      <View>
        <Text className="text-gray-600 text-sm mb-1">외출 일정을 한눈에 확인</Text>
        <Text className="text-black text-2xl font-extrabold">외출 일정</Text>
      </View>
    </TouchableOpacity>
  );
}
