import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/login-screen';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={LoginScreen} />
        </Navigator>
    );
}
