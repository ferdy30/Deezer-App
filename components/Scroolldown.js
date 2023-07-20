import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 5 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList/>
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [

  {
    title: 'Lo que has escuchado',
    data: [
      {
        key: '1',
        text: 'Michael Jackson',
        uri: 'https://th.bing.com/th/id/OIP.gqJ7Io-uJYxL0W0SULK5_QHaHa?pid=ImgDet&rs=1',
      },
      {
        key: '2',
        text: 'J balvin',
        uri: 'https://www.czcomunicacion.com/media/k2/items/cache/fd57315048b2a0e2ee02ed04b0927842_L.jpg',
      },

      {
        key: '3',
        text: 'Farruco',
        uri: 'https://4.bp.blogspot.com/-Inm93nFFoss/WVAuFmLlU2I/AAAAAAAACvg/rg-UcKBY4QsSZ6GcDyarRzmAHofRhmLPgCLcBGAs/s1600/Sketch24675741-1%255B1%255D.jpg',
      },
      {
        key: '4',
        text: 'Bad Bunny',
        uri: 'https://th.bing.com/th/id/OIP.jkn0pbkw1hOOA0eK2BhLTAHaEq?pid=ImgDet&rs=1',
      },
      {
        key: '5',
        text: 'BTS',
        uri: 'https://th.bing.com/th/id/OIP.E0RWngfob_nCI6sS98YFJQHaFj?pid=ImgDet&rs=1',
      },
    ],
  },
  {
    title: 'Lo más escuchado',
    data: [
      {
        key: '1',
        text: 'Enanitos verdes',
        uri: 'https://th.bing.com/th/id/OIP.c_hL-JOPLMJKZhTOxd6XEgHaHa?pid=ImgDet&rs=1',
      },
      {
        key: '2',
        text: 'ACDC',
        uri: 'https://dyn1.heritagestatic.com/lf?set=path[8%2F5%2F1%2F0%2F8510196]&call=url[file:product.chain]',
      },

      {
        key: '3',
        text: 'Merengue',
        uri: 'https://th.bing.com/th/id/OIP.5wCGYDrwfNLODRH35llmmAHaHV?pid=ImgDet&rs=1',
      },
      {
        key: '4',
        text: 'Pitbull',
        uri: 'https://th.bing.com/th/id/OIP.HWjUxoHcDCIRI85tuErCFwHaHa?pid=ImgDet&rs=1',
      },
      {
        key: '5',
        text: 'C-KAN',
        uri: 'https://th.bing.com/th/id/R.15ab0fda231a6f3069f5f52706408aae?rik=vsipaxrHwwFeow&riu=http%3a%2f%2f3.bp.blogspot.com%2f-cjtR63Pheuo%2fWSiWKDvMmaI%2fAAAAAAAAANA%2fnOB5zFl9YWc1Cgg34KuIRzCdBwJ8t2edQCK4B%2fs1600%2ffolder.jpg&ehk=Pvb8RWMZ%2fg1NJFU2GlyES0I7CPx95moZLQd%2bQ10C%2fg4%3d&risl=&pid=ImgRaw&r=0',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'dark',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 350,
    height: 200,
  },
  itemText: {
    color: 'DARK',
    marginTop: 5,
  },
});
