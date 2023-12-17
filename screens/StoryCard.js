import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from "react-native-vectors-icons/Ionicons";
import {RFValue} from "react-native-responsive-fontsize";


SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image 
            Source = {require("assets/story_image1.png")}
            styles = {styles.storyImage}>
            </Image>
            <View style = {styles.titleContainer}>
              <Text style = {styles.storyTitleText}
              >{this.props.story.title}</Text>
              <Text style = {styles.storyAuthorText}
              >{this.props.story.author}</Text>
              <Text style = {styles.storyDescriptionText}
              >{this.props.story.description}</Text>
            </View>
            <View style = {styles.actionContainer}>
              <View style = {styles.likeButton}>
                <Ionicons name = {'heart'} size = {RFValue(30)} color = "white"/>
                <Text>12K</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
