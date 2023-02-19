import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

import {SimplePaginationDot} from './src';

const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    uri: 'https://www.revolvermag.com/sites/default/files/styles/original_image__844px_x_473px_/public/media/section-media/screen_shot_2017-08-14_at_1.28.02_pm.png?itok=-bgQXeP8&timestamp=1508350128',
    title: 'Live On Air',
    content:
      'Artista: Guns N Roses',
  },
  {
    uri: 'https://i.scdn.co/image/ab67616d0000b2730c517c38161bc892a00e1e15',
    title: 'Entre el amor y yo',
    content: 'Artista: Vicente Fernandez',
  },
  {
    uri: 'https://media.pitchfork.com/photos/627425dbc85171592b8a6e6a/1:1/w_600/Bad-Bunny-Un-Verano-Sin-Ti.jpg',
    title: 'Un verano sin ti',
    content:
'Artista: Bad Bunny',  },
  {
    uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Romance_Luis_Miguel.jpg/220px-Romance_Luis_Miguel.jpg',
    title: 'Romance',
    content: 'Artista: Luis Miguel',
  },
  {
    uri: 'https://upload.wikimedia.org/wikipedia/en/5/52/RecessSkrillex.jpg',
    title: 'Recess',
    content: 'Artista: Skrillex ',
  },
];

const INITIAL_INDEX = 0;
export default function ImageCarousel(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.3}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePaginationDot currentIndex={currentIndex} length={data.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', paddingVertical: 20},
  carousel: {
    backgroundColor: 'white',
    aspectRatio: 1.5,
    flexGrow: 0,
    marginBottom: 20,
  },
  item: {
    borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#EBEBEB',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentText: {
    marginTop: 10,
    fontSize: 12,
  },
});

