import { Text, View } from 'react-native';
import { login, socialLogin } from '../mock/data-mock';
import { InputComponent } from '../components/input-component';
import { ButtonComponent } from '../components/button-component';
import { DivisorComponent } from '../components/divisor-component';
import { LoginHeaderComponent } from '../components/login-header-component';
import { SocialButtonComponent } from '../components/social-button-component';

export default function LoginScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white gap-10">
            <LoginHeaderComponent />

            <View className="gap-5 w-4/5">
                {login.map((login, index) => (
                    <InputComponent key={index} placeholder={login.placeholder} placeholderTextColor={login.placeholderTextColor} inlineImageLeft={login.inlineImageLeft} cursorColor={login.cursorColor} textColor={login.textColor} borderColor={login.borderColor} backgroundColor={login.backgroundColor} />
                ))}

                <ButtonComponent title="Acessar" titleColor="#FFF" borderColor="#000" backgroundColor="#000" />

                <Text className="text-xs text-gray-500">Não tem acesso ainda, cadastre-se aqui!</Text>
            </View>

            <DivisorComponent />

            <View className="gap-5 w-4/5">
                {socialLogin.map((slogin, index) => (
                    <SocialButtonComponent key={index} title={slogin.title} titleColor={slogin.titleColor} icon={slogin.icon} borderColor={slogin.borderColor} backgroundColor={slogin.backgroundColor} />
                ))}
            </View>
        </View>
    );
}
