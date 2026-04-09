import { Text, View, StyleSheet } from 'react-native';

export default function InsightScreen() {
  return (
    <View style={styles.container}>
      <Text>Insight Screen</Text>
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
