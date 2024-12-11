import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Welcome to our app</Text>
      <Link href={'/about'}>
        <Text style={{ fontSize: 18 }}>Go to About page</Text>
      </Link>
      <Link href={'/blog'} asChild>
      <Button title='Go to Blog page'/>
      </Link>
      <Link href={'/contact'} asChild>
      <Button title='Go to Contact page'/>
      </Link>
    </View>
  )
}