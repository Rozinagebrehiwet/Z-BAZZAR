import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { Button, Heading, TextInput, Card } from '../../components/UI';
import { colors } from '../../hooks/theme';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();
  const { signIn } = useAuth();
  const { theme, isDarkMode } = useTheme();

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      // For this demo, we'll simulate a successful sign-in
      await signIn({
        id: '1',
        email,
        name: 'Test User',
      });
      router.replace('/(tabs)');
    } catch (error) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/icon.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        
        <Card style={styles.formCard}>
          <Heading level={2} style={styles.title}>Welcome Back</Heading>
          
          <View style={styles.inputWrapper}>
            <Ionicons 
              name="mail-outline" 
              size={22} 
              color={isDarkMode ? colors.blue300 : colors.blue600}
              style={styles.inputIcon}
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="your.email@example.com"
              autoCapitalize="none"
              keyboardType="email-address"
              error={error ? ' ' : ''}
              containerStyle={styles.input}
            />
          </View>
          
          <View style={styles.inputWrapper}>
            <Ionicons 
              name="lock-closed-outline" 
              size={22} 
              color={isDarkMode ? colors.blue300 : colors.blue600}
              style={styles.inputIcon}
            />
            <PaperTextInput
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Your password"
              secureTextEntry={!showPassword}
              error={!!error}
              style={[
                styles.passwordInput,
                isDarkMode && { backgroundColor: '#2C2C2C', color: '#FFF' }
              ]}
              outlineStyle={{ 
                borderRadius: 8,
                borderColor: error ? theme.colors.error : isDarkMode ? '#444' : colors.coolGray
              }}
              theme={{ 
                colors: { 
                  primary: theme.colors.primary,
                  onSurfaceVariant: isDarkMode ? '#CCC' : '#666'
                } 
              }}
              right={
                <PaperTextInput.Icon 
                  icon={showPassword ? 'eye-off' : 'eye'} 
                  onPress={() => setShowPassword(!showPassword)}
                  color={isDarkMode ? colors.blue300 : colors.primary}
                />
              }
            />
          </View>
          
          {error && (
            <View style={styles.errorContainer}>
              <Ionicons 
                name="alert-circle-outline" 
                size={16} 
                color={colors.error}
                style={{ marginRight: 6 }}
              />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}
          
          <Button
            title={loading ? 'Signing in...' : 'Sign In'}
            onPress={handleSignIn}
            disabled={loading}
            fullWidth
            style={styles.button}
            size="large"
            rounded
          />
          
          <View style={styles.footer}>
            <Link href="/(auth)/sign-up" style={{ color: theme.colors.primary }}>
              Don't have an account? Sign up
            </Link>
          </View>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
  },
  formCard: {
    padding: 24,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  inputIcon: {
    marginTop: 14,
    marginRight: 8,
  },
  input: {
    flex: 1,
  },
  passwordInput: {
    flex: 1,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
  },
  button: {
    marginTop: 8,
  },
  footer: {
    marginTop: 24,
    alignItems: 'center',
  },
}); 