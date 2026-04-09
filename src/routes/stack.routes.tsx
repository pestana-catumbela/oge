import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ThemeScreen from '../screens/theme-screen';
import ProfileScreen from '../screens/profile-screen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="theme-screen" component={ThemeScreen} options={{ title: 'Temas' }} />
            <Stack.Screen name="profile-screen" component={ProfileScreen} options={{ title: 'Perfil' }} />
        </Stack.Navigator>
    );
}