import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Navigator = () => {
    const Stack = createNativeStackNavigator();

    function Feed({ navigation }) {
        return (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
        );
    }

    return (
        <NavigationContainer independent={true} >
            <Stack.Navigator
                initialRouteName='Home'
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerStyle: { height: 30 },
                        headerLeft: Feed(),
                    }}
                />
                <Stack.Screen
                    name="Review-Details"
                    component={ReviewDetails}
                    options={{
                        title: 'Details',
                        headerStyle: { height: 30 },

                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}



export default Navigator;