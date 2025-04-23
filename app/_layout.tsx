import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../hooks/useAuth';
import { View, ActivityIndicator, Text, StyleSheet, Image, Animated } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from '../hooks/useTheme';
import { colors } from '../hooks/theme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  
  const [fontsLoaded] = useFonts({
    // Add your custom fonts here if needed
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate resource loading
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Fade out the splash screen
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(async () => {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      });
    }
  }, [appIsReady, fadeAnim]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
      
      <Animated.View 
        style={[
          styles.splashContainer, 
          { opacity: fadeAnim, zIndex: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-1, 10],
          })}
        ]}
      >
        <View style={styles.splashContent}>
          <Text style={styles.splashTitle}>Z-BAZZAR</Text>
          <Text style={styles.splashTagline}>Your Ultimate Shopping Destination</Text>
        </View>
      </Animated.View>
    </>
  );
}

function ThemedApp() {
  const { theme, isDarkMode } = useTheme();
  
  return (
    <>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <AuthProvider>
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <MainLayout />
          </PaperProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </>
  );
}

function MainLayout() {
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  if (loading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: theme.colors.background
      }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background }
      }}
    >
      {!user ? (
        <Stack.Screen name="(auth)" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContent: {
    alignItems: 'center',
  },
  splashLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  splashTagline: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
  }
}); 