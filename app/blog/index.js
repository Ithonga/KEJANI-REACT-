import { View, Text, Button } from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router';

export default function page() {
    const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:18}}>Blog Page</Text>
      <Button onPress={() => router.push('/blog/1')} title='Go to Blog 1'/>
      <Button onPress={() => router.push('/blog/2')} title='Go to blog 2'/>
      <Button onPress={() => router.push('/blog/3')} title='Go to blog 3'/>
    </View>
  )
}