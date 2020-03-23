import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';
import './global.scss';
import router from './router';
//挂载 Mock
import mock from '../mock/index.js'

// if(process.env.NODE_ENV!="production"){
  mock.init()
// }

// if (isInIcestark()) {
//   const mountNode = getMountNode();

//   registerAppEnter(() => {
//     ReactDOM.render(router(), mountNode);
//   });

//   // make sure the unmount event is triggered
//   registerAppLeave(() => {
//     ReactDOM.unmountComponentAtNode(mountNode);
//   });
// } else {
  ReactDOM.render(router(), document.getElementById('ice-container'));
// }
