import { Text, View, StyleSheet } from 'react-native';

export default function StatisticScreen() {
  return (
    <View style={styles.container}>
      <Text>Agent Screen</Text>
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
