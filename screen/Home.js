import * as React from 'react';
import { Text, View, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
