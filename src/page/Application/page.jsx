// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   Platform,
//   View,
//   ScrollView,
// } from 'react-native';

// import { Text } from "react-native-svg";

// import Header from '../../components/Application/Header/page';
// import SelectTime from '../../components/Application/Time/item';
// import Input from '../../components/Application/Input/input';
// import Notice from '../../components/Application/Notice/page';
// import Button from '../../components/Application/Button/button';

// export default function ApplicationPage() {
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [reason, setReason] = useState('');
//   const [teacher, setTeacher] = useState('');

//   return (
//     <SafeAreaView className="flex-1 bg-gray-50">
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1 }}
//       >
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//           <View className="flex-1">
//             <ScrollView
//               contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 16 }}
//               keyboardShouldPersistTaps="handled"
//               showsVerticalScrollIndicator={false}
//             >
//               <Header />
//               <SelectTime
//                 startTime={startTime}
//                 setStartTime={setStartTime}
//                 endTime={endTime}
//                 setEndTime={setEndTime}
//               />
//               <Input
//                 reason={reason}
//                 setReason={setReason}
//                 teacher={teacher}
//                 setTeacher={setTeacher}
//               />
//               <Notice />
//             </ScrollView>
//             <View className="px-5 pt-4 pb-6 bg-white border-t border-gray-100">
//               <Button />
//             </View>
//           </View>
//         </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }
// ApplicationPage.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { X, ArrowLeft } from 'lucide-react-native';

export default function ApplicationPage() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reason, setReason] = useState('');

  const isTimeSelected = !!selectedTime;
  const isReasonValid = reason.trim().length > 0;

  const handleSubmit = () => {
    console.log('외출 신청 완료:', { selectedTime, reason });
    navigation.goBack();
  };

  const options = [
    { label: '점심 외출', time: '오전 12:30 ~ 오후 01:30' },
    { label: '저녁 외출', time: '오후 06:10 ~ 오후 08:30' },
    { label: '기타', time: '오후 00:00 ~ 오전 00:00', selectedTime: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF]">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => {
            if (step === 1) {
              navigation.goBack();
            } else {
              setStep(step-1);
            }
          }}
          className="items-start justify-start ml-5"
        >
          {step === 1 ? <X size={26} /> : <ArrowLeft size={26} />}
        </TouchableOpacity>
        {step === 1 ? (
          <View className="flex-1 px-6 pt-6">
            <Text className="mb-2 text-lg font-bold text-[#343434]">
              외출 시간 선택하기
            </Text>
            <Text className="mb-4 text-sm text-[#7A7A7A]">
              외출하고자 하는 시간을 선택해주세요. 외출 시간이 늦을 것 같거나
              문제가 생기면 꼭 연락을 해주세요.
            </Text>
            <View className="bg-[#FFFFFF] mb-5 p-4 rounded-md shadow-lg">
              <Text className="text-[#24C8A3] text-sm">
                선생님 수락 후 시간 변경이 불가합니다.
              </Text>
            </View>
            {options.map(opt => (
              <TouchableOpacity
                key={opt.label}
                onPress={() => {
                  if (opt.label !== '기타') setSelectedTime(opt.label);
                }}
                disabled={opt.label === '기타'}
                className={`px-4 py-4 mb-3 rounded-xl border bg-[#FFFFFF] ${
                  selectedTime === opt.label
                    ? 'border-emerald-500 bg-emerald-100'
                    : 'border-gray-200 shadow-lg'
                } ${opt.label === '기타' ? 'opacity-50' : ''}`}
              >
                <Text className="font-semibold text-[#343434]">
                  {opt.label}
                </Text>
                <Text className="mt-1 text-gray-500">{opt.time}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              disabled={!isTimeSelected}
              onPress={() => setStep(2)}
              className={`mt-auto py-4 rounded-xl ${
                isTimeSelected ? 'bg-emerald-500' : 'bg-[#D6D6D6]'
              }`}
            >
              <Text className="text-base font-semibold text-center text-white">
                다음
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-1 px-6 pt-6 bg-[#FFFFFF]">
            <Text className="mb-2 text-lg font-bold text-black">
              외출 사유 작성하기
            </Text>
            <Text className="mb-3 text-md text-[#7A7A7A]">
              외출을 하고자 하는 사유를 구체적으로 작성해주세요!
            </Text>
            <View className="mt-5">
              <Text className="mb-3 text-sm text-[#7A7A7A]">
                💡 허위 또는 거짓 사유로 요청 금지
              </Text>
              <Text className="mb-3 text-sm text-[#7A7A7A]">
                💡 함께 외출하는 경우에는 동행자 적기
              </Text>
              <Text className="mb-3 text-sm text-[#7A7A7A]">
                💡 이유가 타당하지 않으면 외출 허가 불가
              </Text>
            </View>
            <View className="flex flex-row mt-5">
              <Text className="mb-3 text-sm text-[#7A7A7A] font-bold">
                외출 사유
              </Text>
              <Text className="mb-3 text-sm text-[#B0B0B0] font-medium">
                (필수)
              </Text>
            </View>
            <TextInput
              multiline
              placeholder="예: 캠핑 준비를 위해 필요한 물품을 구매하고자 합니다."
              value={reason}
              onChangeText={setReason}
              className="border border-gray-200 rounded-xl p-3 min-h-[140px] text-gray-700"
            />

            <TouchableOpacity
              disabled={!isReasonValid}
              onPress={handleSubmit}
              className={`mt-auto py-4 rounded-xl ${
                isReasonValid ? 'bg-emerald-500' : 'bg-gray-200'
              }`}
            >
              <Text className="text-base font-semibold text-center text-white">
                신청하기
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}


