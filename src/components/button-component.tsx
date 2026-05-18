import { Text, TouchableOpacity } from "react-native";

type ButtonComponentProps = {
    title: string;
    titleColor: string;
    borderColor: string;
    backgroundColor: string;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
    return (
        <TouchableOpacity
            className="gap-2.5 h-11 text-base border rounded-lg px-2.5 items-center justify-center"
            style={{ borderColor: props.borderColor, backgroundColor: props.backgroundColor }}
        >
            <Text style={{ color: props.titleColor }}>{props.title}</Text>
        </TouchableOpacity>
    );
}
