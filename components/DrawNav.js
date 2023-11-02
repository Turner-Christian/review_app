import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'
import About from '../screens/About';
import { Button, View, Text } from 'react-native';

const Drawer = createDrawerNavigator();

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

export const DrawNav = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="DrawerHome" component={Navigator} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Feed" component={Feed} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}