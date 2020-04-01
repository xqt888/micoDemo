import * as React from 'react';
import { createApp } from 'ice'
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';
import mock from '../mock/index.js'
//挂载 Mock

 mock.init()


const appConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [{
        path: '/seller',
        title: '商家平台',
        // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
        url: [
          '//ice.alicdn.com/icestark/child-seller-react/index.js',
          '//ice.alicdn.com/icestark/child-seller-react/index.css',
        ],
      }, {
        path: '/waiter',
        title: '小二平台',
        url: [
          // Vue app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-waiter-vue-2
          '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
          '//ice.alicdn.com/icestark/child-waiter-vue/app.css'
        ],
      }, {
        path: '/converge',
        title: 'converge',
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9 
        entry: 'http://localhost:4444/',
      },{
        path: '/dataGovernance',
        title: 'dataGovernance',
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9 
        entry: 'http://10.194.186.247:86/index.html',
      },
    ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

createApp(appConfig)
