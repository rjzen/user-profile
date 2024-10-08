import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const ExploreScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.screen, isDarkMode && styles.darkBackground]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>
        Toggle Theme
      </Text>
      <Switch value={isDarkMode} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default ExploreScreen;