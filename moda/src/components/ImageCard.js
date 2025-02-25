import {Image, View} from 'react-native';

const ImageCard = ({source}) => {
  return (
    <View>
      <Image source={source} style={{width: 300, height: 200}} />
    </View>
  );
};

export default ImageCard;
