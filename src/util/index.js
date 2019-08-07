import { Dimensions } from 'react-native'

const getOrientation = () => {
  const window = Dimensions.get('window');
  if(window.width > window.height){
    return 'LANDSCAPE'
  }
  return 'PORTRAIT';
}

const getStyle = (port, land) => {
  if(getOrientation() === 'LANDSCAPE'){
    return land;
  }
  return port;
}

export {getOrientation, getStyle};

