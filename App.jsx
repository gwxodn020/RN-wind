import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './src/page/Login/page.jsx';
import HomePage from './src/page/Home/page.jsx';
// import CalendarPage from './src/page/Calendar/page.jsx'
import MyPage from './src/page/My/page.jsx';
import ApplicationPage from './src/page/Application/page.jsx';
import OutingPage from './src/page/Outing/page.jsx';
import QrPage from './src/page/qrcode/QRCodeGenerateScreen.jsx';
import MapFullPage from './src/page/Map/page.jsx';
import Card from './assets/wallet.svg';
import HomeIcon from './assets/Home1.svg';
import UserIcon from './assets/profile.svg';
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, marginBottom: 0 },
        tabBarStyle: { height: 80, paddingTop: 12 },
        tabBarActiveTintColor: '#24C8A3',
        tabBarInactiveTintColor: '#A2A2A2',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomePage}
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => (
            <HomeIcon width={26} height={26} stroke={color} />
          ),
        }}
      />

      <Tab.Screen
        name="OutingScreen"
        component={OutingPage}
        options={{
          title: '외출증',
          tabBarIcon: ({ color }) => (
            <Card width={26} height={26} stroke={color} />
          ),
        }}
      />

      <Tab.Screen
        name="MyScreen"
        component={MyPage}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color }) => (
            <UserIcon width={26} height={26} stroke={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ApplicationPage" component={ApplicationPage} />
        {/* <Stack.Screen name="CalendarPage" component={CalendarPage} /> */}
        <Stack.Screen name="QrPage" component={QrPage} />
        <Stack.Screen name="MapFullPage" component={MapFullPage} />
        <Stack.Screen name="MyTab" component={MyTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
