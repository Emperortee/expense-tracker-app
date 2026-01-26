import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '@/contexts/authContexts';

const StackLayout = () => {
  return <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen 
    name="(modals)/profileModal" 
    options={{
      presentation: "modal",
    }}
    />
    <Stack.Screen 
    name="(modals)/walletModal" 
    options={{
      presentation: "modal",
    }}
    />
    <Stack.Screen 
    name="(modals)/transactionModal" 
    options={{
      presentation: "modal",
    }}
    />
  </Stack>;
  
};

export default function Rootlayout(){
  return(
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})