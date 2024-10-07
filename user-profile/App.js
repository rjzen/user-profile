import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';

// Import screens from separate files
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxulJsDjnvxKHOJNjAwwSQi3i8WlqSccA",
  authDomain: "user-profile-7f94b.firebaseapp.com",
  projectId: "user-profile-7f94b",
  storageBucket: "user-profile-7f94b.appspot.com",
  messagingSenderId: "376346769641",
  appId: "1:376346769641:web:5325f2dca6bb413a2a9878",
  measurementId: "G-XNXRWHJK92"
};

const app = initializeApp(firebaseConfig);

// AuthScreen Component
const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#3498db" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
        </Text>
      </View>
    </View>
  );
};

// Stack Navigator for Home
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen  
        name="Home1"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

// Stack Navigator for Explore
const ExploreStack = createStackNavigator();
function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen  
        name="Explore1"
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
    </ExploreStack.Navigator>
  );
}

// Stack Navigator for Profile
const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
        name="Profile1"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Authenticated Screen Component
const AuthenticatedScreen = ({ user, handleAuthentication }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'magnify';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6C5CE7',
        tabBarInactiveTintColor: 'gray',
        headerTitleAlign: 'center',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          borderRadius: 40,
          backgroundColor: '#fff',
          position: 'absolute',
          marginBottom: 20,
          marginHorizontal: 20,
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
          elevation: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Explore" component={ExploreStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// Main App Component
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // null indicates no user is logged in initially
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser ? authUser : null); // Update user state based on authentication status
    });
    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user); // Set user after sign-in
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user); // Set user after sign-up
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <NavigationContainer>
      {user ? (
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        <ScrollView>
          <AuthScreen
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            handleAuthentication={handleAuthentication}
          />
        </ScrollView>
      )}
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginLeft: 37,
    marginTop: 150,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
});
