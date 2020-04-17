// This is an entry point for react-native-web
import './src/index.css';
import App from './src/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
