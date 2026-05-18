import { Text, Image, TouchableOpacity } from "react-native";

type SocialButtonComponentProps = {
    title: string;
    titleColor: string;
    icon: string | any;
    borderColor: string;
    backgroundColor: string;
}

export const SocialButtonComponent = (props: SocialButtonComponentProps) => {
    return (
        <TouchableOpacity
            className="flex-row items-center justify-center gap-2.5 h-11 text-base border rounded-lg px-2.5"
            style={{ borderColor: props.borderColor, backgroundColor: props.backgroundColor }}
        >
            <Image source={props.icon} resizeMode="contain" style={{ width: 24, height: 24 }} />
            <Text style={{ color: props.titleColor }}>{props.title}</Text>
        </TouchableOpacity>
    );
}
