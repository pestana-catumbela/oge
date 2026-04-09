import { Text, View, StyleSheet } from 'react-native';

export default function ThemeScreen() {
  return (
    <View style={styles.container}>
      <Text>Theme Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
});
