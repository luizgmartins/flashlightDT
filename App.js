import React , {useState, useEffect} from "react";
import {View,StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imageL from './assets/icons/eco-light.png';
import imageLoff from './assets/icons/eco-light-off.png';
import dioOff from './assets/icons/logo-dio.png';
import dioOn from './assets/icons/logo-dio-white.png';
import imgDT from './assets/icons/DT.png';
import imgLGM from './assets/icons/lgm.png';


const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () =>{setToggle((oldToggle) => !oldToggle)};
  useEffect(() => {
   //liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle((oldToggle) => !oldToggle);
    });
    return() => subscription.remove();
  },[]);
  return (
    <View style={toggle ? style.containerLight : style.container} >
      <TouchableOpacity onPress={handleChangeToggle}>
        <View style={{flexDirection: 'row'}}>
          <Image style={toggle ? style.styleLgmON:style.styleLgmOff} source={imgLGM} />
          <Image style={toggle ? style.logoOn:style.logoOff} source={toggle ? dioOff: dioOn} />
        </View>
        <Image style={toggle ? style.lightiningOn:style.lightiningOff} source={toggle ? imageL: imageLoff} />
        <Image style={style.styleDT} source={imgDT} />
    </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lightiningOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  lightiningOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 200,
    height: 200,
    tintColor: 'white',
  },
  logoOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 135,
    height: 135,
    marginTop: 15,
    marginBottom: 100,
  },
  logoOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 135,
    height: 135,
    tintColor: 'white',
    marginTop: 15,
    marginBottom: 100,
  },
  styleDT: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 120,
    height: 120,
    marginTop: 100,
    marginBottom: 20,
  },
  styleLgmON: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    width: 120,
    height: 120,
    marginTop: 20,
    marginRight: 100,
  },
  styleLgmOff: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    width: 120,
    height: 120,
    tintColor: 'white',
    marginTop: 20,
    marginRight: 100,
  }
});
