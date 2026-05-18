import { Text, View } from 'react-native';

export const LoginHeaderComponent = () => {
    return (
        <View className="gap-2 items-center">
            <Text className="text-xl font-bold text-blue-500">Bem vindo ao OGE</Text>
            <Text className="text-base text-gray-700">Seu app de consulta, estatistica e muito mais!</Text>
        </View>
    );
}
