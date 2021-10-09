import React from 'react';
import { StyleSheet, Vibration } from 'react-native';
import { Heading, Text, View, Button, VStack } from 'native-base';
import Sound from 'react-native-sound';

let hello = new Sound(
   'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
   Sound.MAIN_BUNDLE,
   (error) => {
      if (error) {
         console.log(error);
      }
   },
);

hello.play((success) => {
   if (!success) {
      console.log('Sound did not play');
   }
});

const FuncButton = () => {
   return (
      <View style={styles.formContainer}>
         <View>
            <Heading size='2xl'>Button</Heading>
            <Text fontSize='md' style={styles.subTitle}>
               Press the button to vibrate or ring a bell
            </Text>
         </View>
         <View style={styles.content}>
            <VStack space={4}>
               <Button
                  size='40'
                  colorScheme='teal'
                  onPress={() => Vibration.vibrate(10 * 1000)}
               >
                  <Text fontSize='lg' color='white' colorScheme='teal'>
                     Vibrate
                  </Text>
               </Button>
               <Button
                  size='40'
                  colorScheme='danger'
                  onPress={() =>
                     hello.play((success) => {
                        if (!success) {
                           return console.log('Sound did not play');
                        }
                        console.log('Sound Play');
                     })
                  }
               >
                  <Text fontSize='lg' color='white' colorScheme='teal'>
                     Ring
                  </Text>
               </Button>
            </VStack>
         </View>
      </View>
   );
};

export default FuncButton;

const styles = StyleSheet.create({
   formContainer: {
      flex: 1,
      paddingVertical: 50,
      paddingHorizontal: 25,
      backgroundColor: 'white',
   },
   subTitle: {
      fontStyle: 'italic',
   },
   content: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
});
