import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Drawer from './src/pages/drawer/drawer'
import cadastroUser from './src/pages/user/cadastroUser'
import cadastroLoja from './src/pages/cadastro_cm/cadastroLoja'
import Verificacao from './src/pages/troubleshooting/verficacao'
import form from './src/pages/cadastro_cm/form';
import UploadImage from './UploadImage';

const AuthSatck = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <AuthSatck.Navigator
        headerMode='none'
      >
        <AuthSatck.Screen name = 'drawer' component={Drawer}/>
        <AuthSatck.Screen name = 'cadaUser' component={cadastroUser}/>
        <AuthSatck.Screen name = 'cadaLoja' component={cadastroLoja}/>
        <AuthSatck.Screen name='UploadImage' component={UploadImage} />
        <AuthSatck.Screen name='formLoja' component={form} />
        <AuthSatck.Screen name='teste' component={Verificacao} />
 
      </AuthSatck.Navigator>
    </NavigationContainer>
    
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <UploadImage/>
//       <Text style={{marginVertical:20,fontSize:16}}>Welcome, FuzzySid</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding:50,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
