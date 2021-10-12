import React, { useRef, useState } from 'react';
import { StyleSheet, Vibration } from 'react-native';
import {
   Heading,
   Text,
   View,
   Button,
   AlertDialog,
   useToast,
   Center,
} from 'native-base';
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
   const toast = useToast();
   const [isOpen, setIsOpen] = useState(false);

   const onClose = () => setIsOpen(false);

   const handlePressVibranceButton = () => {
      Vibration.vibrate(10 * 1000);
      toast.show({
         description: 'Vibrance...',
         placement: 'top',
         backgroundColor: 'blue.700',
      });
   };

   const handlePressRingButton = () => {
      hello.play((success) => {
         if (!success) {
            return console.log('Sound did not play');
         }
      });
   };

   return (
      <>
         <View style={styles.formContainer}>
            <View>
               <Heading size='2xl'>Button</Heading>
               <Text fontSize='md' style={styles.subTitle}>
                  Press the button to vibrate or ring a bell
               </Text>
            </View>
            <View style={styles.content}>
               <Button
                  size='40'
                  colorScheme='teal'
                  onPress={() => setIsOpen(true)}
               >
                  <Text
                     fontSize='lg'
                     color='white'
                     colorScheme='teal'
                     textAlign='center'
                  >
                     Choose notifications
                  </Text>
               </Button>
            </View>
         </View>
         <Center>
            <AlertDialog isOpen={isOpen} onClose={onClose}>
               <AlertDialog.Content>
                  <AlertDialog.CloseButton />
                  <AlertDialog.Header>Magic Button</AlertDialog.Header>
                  <AlertDialog.Body>
                     Choose the button for selecting the notifications type
                  </AlertDialog.Body>
                  <AlertDialog.Footer>
                     <Button.Group space={2}>
                        <Button
                           colorScheme='blue'
                           onPress={handlePressVibranceButton}
                        >
                           Vibrate
                        </Button>
                        <Button
                           colorScheme='danger'
                           onPress={handlePressRingButton}
                        >
                           Ring the bell
                        </Button>
                     </Button.Group>
                  </AlertDialog.Footer>
               </AlertDialog.Content>
            </AlertDialog>
         </Center>
      </>
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
