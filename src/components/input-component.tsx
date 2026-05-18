import { TextInput } from 'react-native';

type InputComponentProps = {
    textColor: string;
    cursorColor: string;
    placeholder: string;
    borderColor: string;
    inlineImageLeft: string;
    backgroundColor: string;
    placeholderTextColor: string;
};

export const InputComponent = (props: InputComponentProps) => {
  return (
    <TextInput
        inputMode="text"
        inlineImagePadding={15}
        placeholder={props.placeholder}
        cursorColor={props.cursorColor}
        inlineImageLeft={props.inlineImageLeft}
        placeholderTextColor={props.placeholderTextColor}
        style={{ color: props.textColor, borderColor: props.borderColor, backgroundColor: props.backgroundColor }}
        className="h-11 text-base border rounded-lg px-3"
    />
  );
}
