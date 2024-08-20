import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    useColorScheme,
    TouchableHighlight,
    Alert,
    View,
    TextInput,
    Button,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dark, Light } from '../Constants/styles';
import { useTranslation } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import i18n from '../Constants/translation';

const Register: React.FC = () => {
    //Email: /^\S+@\S+\.\S+$/
    //PhoneNumber: /^\+?[1-9][0-9]{7,14}$/
    //Strong Password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    //Egypt ID: (2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d
    const [name, setName] = useState('');
    const [id, SetID] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [phoneNumber, SetPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [ButtonDisabled, setButtonDisable] = useState(true);
    const [langFlags, setLanguageFlags] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        // Set the initial language based on device locale
        const locale = RNLocalize.getLocales()[0].languageCode;
        console.log(RNLocalize.getLocales()[0])
        i18n.changeLanguage(locale);
    }, []);
    const ChangeLang = () => {
        if (langFlags) {
            i18n.changeLanguage('en');
            console.log(RNLocalize.getLocales()[0])
        } else {
            i18n.changeLanguage('it');
            console.log(RNLocalize.getLocales()[0])
        }
        setLanguageFlags(!langFlags);
    }
    const validatation = () => {
        const isValidName = name.trim().length > 0;
        const isValidID = /^\d{14}$/.test(id);
        const isValidEmail = /^\S+@\S+\.\S+$/.test(email);;
        const isValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
        const isValidPhoneNumber = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/.test(phoneNumber);
        const isValidAge = /^\d+$/.test(age) && parseInt(age) > 0;

        if (isValidAge && isValidEmail && isValidPhoneNumber && isValidID
            && isValidPassword && isValidName) {
            setButtonDisable(false);
        }
        else {
            setButtonDisable(true);
        }
    }

    const warning = () => {
        if (!ButtonDisabled) {
            storeUserData(name, email, password);
            Alert.alert('Account Saved', 'Your Account has been saved successfully', [
                { text: 'OK', onPress: () => console.log('Account Saved') },
            ]);
            console.log(email + "     " + password);
        }
        else {
            Alert.alert('Can not Procced', 'Please make sure to fill all inputs with the right format', [
                { text: 'OK', onPress: () => console.log('Validation error') },
            ]);
        }
    };

    useEffect(() => {
        validatation();
    }, [name, email, password, id, phoneNumber, age]);

    const storeUserData = async (name: string, email: string, password: string) => {
        try {
            const user = {
                name,
                email,
                password,
            };
            await AsyncStorage.setItem('user', JSON.stringify(user))
            console.log("registerattion completed")
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.parent}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
            <View style={styles.container}>
                <Text style={styles.title}>{t('register')}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={t('fullName')}
                        placeholderTextColor="#7a7878"
                        keyboardType="email-address"
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={t('ID')}
                        placeholderTextColor="#7a7878"
                        keyboardType="numeric"
                        onChangeText={SetID}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={t('Email')}
                        placeholderTextColor="#7a7878"
                        keyboardType="email-address"
                        onChangeText={SetEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={t('Password')}
                        placeholderTextColor="#7a7878"
                        secureTextEntry={true}
                        onChangeText={SetPassword}
                    />
                    {/* <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#7a7878"
                        secureTextEntry={true}
                    /> */}
                    <TextInput
                        style={styles.input}
                        placeholder={t('PhoneNumber')}
                        placeholderTextColor="#7a7878"
                        keyboardType="numeric"
                        onChangeText={SetPhoneNumber}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={t('Age')}
                        placeholderTextColor="#7a7878"
                        keyboardType="numeric"
                        onChangeText={setAge}
                    />
                </View>
                <TouchableOpacity
                    style={[styles.ValidButton, !ButtonDisabled ? styles.ValidButton : styles.InvalidButton]}
                    //disabled={ButtonDisabled}
                    onPress={warning}
                >
                    <Text style={styles.buttonText}>{t('CreateAnAccount')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.ValidButton, { marginTop: 10 }]}
                    //disabled={ButtonDisabled}
                    onPress={ChangeLang}
                >
                    <Text style={styles.buttonText}>{t('Changelang')}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#222831',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: '10%',
        color: '#EEEEEE',
        paddingBottom: '10%',
    },
    inputContainer: {
        width: '100%',
        gap: 15,
        marginBottom: '10%',
    },
    input: {
        width: '100%',
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#393E46',
        color: '#EEEEEE',
    },
    button: {
        backgroundColor: '#00ADB5',
        width: 'auto',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ValidButton: {
        backgroundColor: '#00ADB5',
        width: 'auto',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    InvalidButton: {
        backgroundColor: '#706f6b',
        width: 'auto',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#EEEEEE',
        fontSize: 16,
    },
});

export default Register;
