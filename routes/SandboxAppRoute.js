// @flow
import Relay, { Route } from 'react-relay'

export default class SandboxAppRoute extends Route {
  static paramDefinitions = {
    status: {required: false},
  }
  static queries = {
    viewer: () => Relay.QL`query { viewer }`,
  }
  static routeName = 'SandboxAppRoute'
}
