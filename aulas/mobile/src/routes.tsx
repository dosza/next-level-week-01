import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; //biblioteca para navegar entre as pilhas de tela

import Home  from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return ( 
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none"
                
                screenOptions={{
                    //as duas chaves são usadas para {codigo java sript{objeto javascript}}
                    cardStyle : {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Points" component={Points} />
                <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
