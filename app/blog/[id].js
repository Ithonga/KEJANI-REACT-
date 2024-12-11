import { View, Text, Button } from 'react-native'
import React from 'react'
import { useLocalSearchParams, router,Stack } from 'expo-router';

export default function page() {
    const { id } = useLocalSearchParams();
    return (
        <>
            <Stack.Screen options={{ headerTitle: 'Article ${id}' }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>Blog post details {id}</Text>
                <Button onPress={() => router.back()} title='Go Back' />
            </View>
        </>
    )
}