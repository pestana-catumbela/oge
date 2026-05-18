import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './drawer.routes';
import { AuthRoutes } from './auth.routes';

export default function Routes() {
    const user = null;

    return (
        <NavigationContainer>
            {user ? <DrawerRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}
