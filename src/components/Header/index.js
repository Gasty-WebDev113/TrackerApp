import React, {useState} from 'react';
import {HeaderMenu} from './Menu';
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HeaderContainer} from './Menu/styles';

export const HeaderContain = ({children}) => {
  const [open, setOpen] = useState(false);
  const menu = <HeaderMenu navigator={navigator} />;
  return (
    <SideMenu menu={menu} isOpen={open}>
      <HeaderContainer
        backgroundColor="black"
        leftComponent={
          <Icon
            name="bars"
            size={30}
            color="white"
            onPress={() => setOpen(!open)}
          />
        }
        centerComponent={{text: 'TrackApp', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff', size: 30}}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{borderBottomColor: 'black', borderBottomWidth: 1}}
      />
      {children}
    </SideMenu>
  );
};
