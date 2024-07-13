import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {TranslatorProvider} from 'react-native-translator';
import Translator from 'react-native-translator';

const App = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  return (
    <TranslatorProvider>
      <View>
        <Translator
          from="en"
          to="ml"
          value={value}
          onTranslated={t => setResult(t)}
        />
        <TextInput value={value} onChangeText={t => setValue(t)} />
        <Text>{result}</Text>
      </View>
    </TranslatorProvider>
  );
};

export default App;
