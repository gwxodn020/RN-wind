import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';

export default function QRCodeGenerateScreen() {
  const navigation = useNavigation();

  const userData = {
    userId: 'vitaherb123',
    token: 'xyz789abc123',
    expiresAt: new Date().toISOString(),
  };

  return (
    <View className="items-center flex-1 bg-white">
      <View className="flex-row w-full px-5 py-4 ">
        <TouchableOpacity
          className="p-2"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color="#000" size={26} strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <View className="items-center justify-center flex-1">
        <QRCode
          value={JSON.stringify(userData)}
          size={200}
          color="#000"
          backgroundColor="#fff"
        />
        <Text className="mt-6 text-gray-600">사용자 인증용 QR 코드</Text>
      </View>
    </View>
  );
}
