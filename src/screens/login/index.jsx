import React, {useContext, useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {Input, Button} from '@ui-kitten/components';
import {width} from '../../utils/constans';
import {screenStyle} from '../../styles/screenStyle';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {AppColors} from '../../theme/colors';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('mor_2314');
  const [password, setPassword] = useState('83r5^_');
  const [disableButton, setDisableButton] = useState(false);
  const [isRequareUsername, setUsernameRequare] = useState(true);
  const [isRequarePassword, setPasswordRequare] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const {setIslogin} = useContext(StoreContext);

  const login = () => {
    if (!username) {
      setUsernameRequare(false);
      return;
    } else {
      setUsernameRequare(true);
    }
    if (!password) {
      setPasswordRequare(false);
      return;
    } else {
      setPasswordRequare(true);
    }

    setDisableButton(true);
    postRequest(LOGIN_URL, {username, password})
      .then(response => {
        console.log(response.data);
        setIslogin(true);
        navigation.goBack();
      })
      .catch(error => {
        console.log(error.response);
      })
      .finally(() => {
        setDisableButton(false);
      });
  };

  return (
    <View style={screenStyle.container}>
      <ScrollView>
        <View>
          <Image
            source={require('../../assets/icon/icon.png')}
            style={{
              width: width * 0.3,
              height: width * 0.2,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
        <View>
          <Input
            size="large"
            style={{marginVertical: 10}}
            status={isRequareUsername ? 'basic' : 'danger'}
            value={username}
            label="User Name"
            placeholder="Place your User Name"
            onChangeText={nextValue => setUsername(nextValue)}
            caption={
              !isRequareUsername ? 'Kullanıcı alanını boş bırakmayınız' : null
            }
          />
          <Input
            size="large"
            status={isRequarePassword ? 'basic' : 'danger'}
            caption={
              !isRequarePassword ? 'Şifre alanını boş bırakmayınız' : null
            }
            style={{marginVertical: 10}}
            value={password}
            label="Password"
            secureTextEntry={secureTextEntry}
            accessoryRight={() =>
              secureTextEntry ? (
                <EyeSlash
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              ) : (
                <Eye
                  size="28"
                  color={AppColors.BLACK}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              )
            }
            placeholder="Place your Text"
            onChangeText={nextValue => setPassword(nextValue)}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            disabled={disableButton}
            onPress={login}
            style={{marginVertical: 10}}
            status="success">
            Login
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
