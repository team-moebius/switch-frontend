import React from 'react';
import { Modal, View, Pressable, StyleSheet, Text } from 'react-native';

export interface SelectProps {
  modalVisible: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
  options: string[];
}

const Select = ({
  modalVisible,
  setSelectedOption,
  onPress,
  options,
}: SelectProps) => {
  return (
    <View style={style.centeredView}>
      <Modal animationType='slide' visible={modalVisible}>
        <View style={style.defaultModal}>
          {options.map((option) => (
            <Pressable
              key={option}
              onPress={() => {
                onPress();
                setSelectedOption(option);
              }}
            >
              <View style={style.defaultText}>
                <Text>{option}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default Select;

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  defaultModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  defaultText: {
    padding: 10,
  },
});
