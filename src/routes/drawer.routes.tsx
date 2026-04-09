import { Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './tab.routes';
import ThemeScreen from '../screens/theme-screen';
import ProfileScreen from '../screens/profile-screen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="tabs" component={TabRoutes} options={{ title: 'Home', headerShown: false, drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="profile-screen" component={ProfileScreen} options={{ title: 'Conta', swipeEnabled: false, headerLeft: () => null, drawerIcon: ({ size, color }) => <Feather name="user" size={size} color={color} /> }} />
            <Drawer.Screen name="theme-screen" component={ThemeScreen} options={{ title: 'Temas', swipeEnabled: false, headerLeft: () => null, drawerIcon: ({ size, color }) => <Feather name="sun" size={size} color={color} /> }} />
        </Drawer.Navigator>
    );
}
