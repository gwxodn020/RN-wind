import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  Image,
} from 'react-native';

export default function LoginPage({ navigation }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginFail, setLoginFail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!studentId.trim()) newErrors.studentId = '학번을 입력해주세요.';
    if (!password) newErrors.password = '비밀번호를 입력해주세요.';
    else if (password.length < 4)
      newErrors.password = '비밀번호는 4자 이상이어야 합니다.';
    return newErrors;
  };

  const handleLogin = () => {
    Keyboard.dismiss();
    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setLoginFail(false);
      return;
    }

    setErrors({});
    if (studentId === 'admin' && password === '1234') {
      Alert.alert('로그인 성공');
      navigation.navigate('MyTab');
    } else {
      setLoginFail(true);
    }
  };

  const handleHelp = () => Alert.alert('담당 선생님께 문의해주세요');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : -60}
        className="justify-between flex-1 px-6 bg-gray-50"
      >
        <View className="mt-28">
          <Text className="mb-10 text-4xl font-extrabold text-[#343434]">
            로그인
          </Text>
          <Image
            source={require('../../../assets/logo1.jpg')}
            style={{ width: 60, height: 60, marginBottom: 20 }}
          />
          <Text className="text-2xl font-semibold text-[#343434]">
            경북소프트웨어마이스터고등학교
          </Text>
          <Text className="text-2xl font-semibold text-[#343434]">
            외출증 앱입니다.
          </Text>
          <Text className="mt-4 text-lg text-[#343434]">
            외출증 애플리케이션 사용을 위해 로그인을 해주세요.
          </Text>
          <TextInput
            className="px-1 pb-2 mt-12 mb-2 text-lg border-b border-gray-400"
            placeholder="학번"
            placeholderTextColor="#343434"
            value={studentId}
            onChangeText={setStudentId}
            style={{ height:80}}
          />
          {errors.studentId && (
            <Text className="text-sm text-red-500">{errors.studentId}</Text>
          )}

          <TextInput
            className="px-1 pb-2 mt-2 text-lg text-black border-b border-gray-400"
            placeholder="비밀번호"
            placeholderTextColor="#343434"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ height:80}}
          />
          {errors.password && (
            <Text className="mt-1 text-sm text-red-500">{errors.password}</Text>
          )}

          {loginFail && (
            <Text className="mt-4 text-center text-red-500">
              로그인에 실패했습니다. 학번과 비밀번호가 맞지 않습니다.
            </Text>
          )}
        </View>
        <View className="items-center w-full mb-14">
          <TouchableOpacity
            className="items-center justify-center w-11/12 py-4 rounded-full bg-[#5CC7AA] "
            onPress={handleLogin}
          >
            <Text className="text-lg font-medium text-white">로그인하기</Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center mt-6 ml-7">
            <TouchableOpacity onPress={handleHelp}>
              <Text className="text-base font-normal text-[#343434]">
                회원가입
              </Text>
            </TouchableOpacity>

            <View className="w-px h-5 mx-8 bg-gray-300" />

            <TouchableOpacity onPress={handleHelp}>
              <Text className="text-base font-normal text-[#343434]">
                비밀번호 찾기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
