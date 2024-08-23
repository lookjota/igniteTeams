import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Groups } from '../screens/Groups';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Groups/>
  );
}
