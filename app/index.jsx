import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
	return (
		<View className="bg-red-500">
			<Text>Hello world!</Text>
			<Link href="/profile">Go to profile</Link>
			<StatusBar style="auto" />
		</View>
	);
}