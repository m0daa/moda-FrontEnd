const localImages = [
  require('../assets/images/img1.png'),
  require('../assets/images/img2.png'),
  require('../assets/images/img3.png'),
];

export const fetchImages = async page => {
  return localImages.map((image, index) => ({
    id: page * localImages.length + index,
    source: image, // uri 대신 source로 전달
  }));
};
