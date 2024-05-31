import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Demo1',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Demo2',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Demo3',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'attach' : 'attach-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="landing"
        options={{
          title: 'Demo4',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'airplane' : 'airplane-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
