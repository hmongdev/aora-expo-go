import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FormField from '../../components/FormField';
import { images } from '../../constants';

const SignIn = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View
					className="w-full flex justify-center h-full px-4 my-6"
					style={{
						minHeight:
							Dimensions.get('window')
								.height - 100,
					}}>
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115px] h-[34px]"
					/>

					<Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
						Log in to Aora
					</Text>

					<FormField
						title="Email"
						value={form.email}
						handleChangeText={(e) =>
							setForm({
								...form,
								email: e,
							})
						}
						otherStyles="mt-7"
						keyboardType="email-address"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
