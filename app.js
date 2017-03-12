// @flow
import SandboxApp from './components/SandboxApp'
import SandboxAppRoute from './routes/SandboxAppRoute'
import React, { Component } from 'react';
import Relay, {
  DefaultNetworkLayer,
  RootContainer
} from 'react-relay';
import { View } from 'react-native';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://192.168.1.8:4000')
)

export default class ReactNativeRelaySandbox extends Component {
  render = () => (
    <RootContainer
      Component={SandboxApp}
      route={new SandboxAppRoute({status: 'any'})}
    />
  )
}
