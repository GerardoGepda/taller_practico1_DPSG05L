import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FirstExercise from './../screens/FirstExercise';
import SecondExercise from './../screens/SecondExercise';
import ThirdExercise from './../screens/ThirdExercise';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    
                    if(route.name === "Ejer 1"){
                        iconName = focused ? 'calculator' : 'calculator-outline';
                    }else if(route.name === "Ejer 2"){
                        iconName = focused ? 'cash' : 'cash-outline';
                    }else if(route.name === "Ejer 3"){
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Ejer 1" component={FirstExercise}/>
            <Tab.Screen name="Ejer 2" component={SecondExercise}/>
            <Tab.Screen name="Ejer 3" component={ThirdExercise}/>
        </Tab.Navigator>
    );
}

export default BottomTab;
