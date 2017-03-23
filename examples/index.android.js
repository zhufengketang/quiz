/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry
} from 'react-native';

import BoxExample from "./examples/BoxExample"
import FloatingAndZIndexExample from "./examples/FloatingAndZIndexExample"
import FlexboxExample from "./examples/FlexboxExample"

import HeaderAndFooter from "./examples/week2/HeaderAndFooter"
import Week2Loading from "./examples/week2/Week2Loading"
import Week2Numpad from "./examples/week2/Week2Numpad"
import Week2Password from "./examples/week2/Week2Password"
import Week2Login from "./examples/week2/Week2Login"

import EventExample from "./examples/EventExample"

AppRegistry.registerComponent('examples', () => EventExample);
