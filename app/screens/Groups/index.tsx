import { StyleSheet, Text, View } from "react-native";


export function Groups() {
  return (
    <View style={styles.container}>
      <Text>
        Ola react
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})