import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AddContact, ColdSub, CurrencyChoiceFull, MainPage, Receive, Send, SendScreen, SetupNotification, TransactionDetail, TransactionHistory } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='MainPage'
        >
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="CurrencyChoiceFull" component={CurrencyChoiceFull} />
            <Stack.Screen name="SendScreen" component={SendScreen} />
            <Stack.Screen name="Send" component={Send} />
            <Stack.Screen name="ColdSub" component={ColdSub} />
            <Stack.Screen name="Receive" component={Receive} />
            <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
            <Stack.Screen name="AddContact" component={AddContact} />
            <Stack.Screen name="SetupNotification" component={SetupNotification} />
            <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
        </Stack.Navigator>
    )
}

export default Router