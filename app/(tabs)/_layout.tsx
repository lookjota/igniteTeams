import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


import { Groups } from '../screens/Groups';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import { Loading } from '../components/Loading';


export default function TabLayout() {
  // const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Groups/> : <Loading/> }
    </ThemeProvider>
  );
}
