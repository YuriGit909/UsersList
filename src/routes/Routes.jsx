import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home} from '../pages/Home'
import {Details} from '../pages/Details'

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Lista de Usuários" component={Home}/>
                <Stack.Screen name="Detalhes" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}