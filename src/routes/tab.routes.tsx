import { Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BudgetScreen from '../screens/budget-screen';
import InsightScreen from '../screens/insight-screen';
import StatisticScreen from '../screens/agent-screen';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerTitle: 'OGE', headerTitleAlign: 'center' }}>
            <Tab.Screen name="home-screen" component={BudgetScreen} options={{ title: 'Orçamentos', tabBarIcon: ({ size, color }) => <Feather name="check-square" size={size} color={color} /> }} />
            <Tab.Screen name="insight-screen" component={InsightScreen} options={{ title: 'Insights', tabBarIcon: ({ size, color }) => <Feather name="bar-chart" size={size} color={color} /> }} />
            <Tab.Screen name="profile-screen" component={StatisticScreen} options={{ title: 'Agente de IA', tabBarIcon: ({ size, color }) => <AntDesign name="robot" size={size} color={color} /> }} />
        </Tab.Navigator>
    );
}