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
import { View, Text } from 'react-native';
export default function ApplicationPage() {
  return(
    <View>
      <Text>Application Page</Text>
    </View>
  )
}
