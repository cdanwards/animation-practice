import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Option = {
  value: string;
  label: string;
  component: React.ReactNode;
};

const OptionsSelector = ({ options }: { options: Option[] }) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value
  );

  return (
    <View>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
      <View style={{ minHeight: 400, minWidth: 300 }}>
        {options.find((option) => option.value === selectedOption)?.component}
      </View>
    </View>
  );
};

export default OptionsSelector;
