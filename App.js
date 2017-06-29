import React, { Component } from "react";
import {
  AppRegistry, //Registers the app
  StatusBar //Allows to hide status bar
} from "react-native";
import Screens from "./Screens";

export default class TestApp002 extends Component {
  componentDidMount() {
    //Hide status bar
    StatusBar.setHidden(true);
  }
  render() {
    return <Screens />;
  }
}

AppRegistry.registerComponent("TestApp", () => TestApp);
