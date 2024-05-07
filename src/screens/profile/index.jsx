//import liraries
import React, {useContext} from 'react';
import {View, ScrollView, Text} from 'react-native'; // Text bileşeni buradan import ediliyor
import StoreContext from '../../context';
import UserInfo from '../../components/profile/userInfo';
import ProfileMenu from './profileMenu';
import {screenStyle} from '../../styles/screenStyle';
import {Button} from '@ui-kitten/components';
import {LOGIN} from '../../utils/routes';

const Profile = ({navigation}) => {
  const {isLogin} = useContext(StoreContext);

  return (
    <View style={screenStyle.container}>
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              Please log in to see user information.
            </Text>
          </View>
          <Button
            size="large"
            onPress={() => navigation.navigate(LOGIN)}
            style={{marginVertical: 10}}
            status="info">
            Log in
          </Button>
        </View>
      )}
    </View>
  );
};

export default Profile;
