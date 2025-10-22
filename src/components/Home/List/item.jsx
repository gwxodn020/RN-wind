import { View, Text, TouchableOpacity } from 'react-native';

export default function WeeklySchedule() {
  const schedules = [
    { id: 1, date: '10/06 (월)', title: '외출 신청' },
    { id: 2, date: '10/08 (수)', title: '외출 승인 확인' },
    { id: 3, date: '10/10 (금)', title: '외출 일정 진행' },
  ];

  return (
    <View className="p-5 mx-2 mt-6 rounded-2xl">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-gray-700 text-xl font-bold">이번 주 일정</Text>
        <TouchableOpacity>
          <Text className="text-gray-400 text-sm">전체 보기 →</Text>
        </TouchableOpacity>
      </View>
      {schedules.map(item => (
        <View
          key={item.id}
          className="bg-white rounded-xl px-7 py-6 mb-3 flex-row justify-between items-center shadow-sm"
        >
          <Text className="text-gray-500 text-xl">{item.date}</Text>
          <Text className="text-black text-lg font-semibold">
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}
