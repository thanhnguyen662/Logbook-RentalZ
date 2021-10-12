import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'native-base';

const Datepicker = (props) => {
   const {
      setFieldValue,
      fieldName,
      value,
      isDisabled,
      onBlur,
      error,
      touched,
      minimumDate,
      maximumDate,
   } = props;
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

   const minimum = () => {
      if (minimumDate) {
         return {
            minimumDate: new Date(minimumDate),
         };
      } else {
         return;
      }
   };

   const maximum = () => {
      if (maximumDate) {
         return {
            maximumDate: new Date(maximumDate),
         };
      } else {
         return;
      }
   };

   return (
      <View>
         <TouchableOpacity
            style={error && touched ? styles.buttonError : styles.button}
            onPress={() => setDatePickerVisibility(true)}
            disabled={isDisabled}
            onBlur={onBlur}
         >
            <Text style={styles.dateValue}>
               {value === '' ? (
                  <Text color={'#A6A6A6'}>Choose a date</Text>
               ) : (
                  moment(value).format('MM-DD-YYYY')
               )}
            </Text>
         </TouchableOpacity>
         <DateTimePickerModal
            {...minimum()}
            {...maximum()}
            isVisible={isDatePickerVisible}
            mode='date'
            onConfirm={(e) => {
               setFieldValue(fieldName, new Date(e));
               setDatePickerVisibility(false);
            }}
            onCancel={() => setDatePickerVisibility(false)}
         />
      </View>
   );
};

export default Datepicker;

const styles = StyleSheet.create({
   button: {
      alignItems: 'flex-start',
      borderColor: '#e5e5e5',
      borderWidth: 1,
      padding: 8,
      borderRadius: 4,
      height: 42,
   },
   dateValue: {
      fontSize: 13,
      color: '#1f2937',
   },
   buttonError: {
      alignItems: 'flex-start',
      borderColor: 'red',
      borderWidth: 1,
      padding: 8,
      borderRadius: 4,
      height: 42,
   },
});
