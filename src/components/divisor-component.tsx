import { Text, View } from 'react-native';

export const DivisorComponent = () => {
    return (
        <View className="flex-row items-center justify-center w-4/5">
            <View className="w-[44%] border-b border-gray-300" />
            <Text className="text-base text-gray-500 px-2.5 pb-1">
                ou
            </Text>
            <View className="w-[44%] border-b border-gray-300" />
        </View>
    );
}
