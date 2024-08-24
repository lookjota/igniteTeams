import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Groups } from '../screens/Groups';


import { ThemeProvider } from 'styled-components';
import theme from '../theme';


export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={theme}>
      <Groups/>
    </ThemeProvider>
  );
}
