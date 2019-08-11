import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout} from 'react-native-ui-kitten';

const LayoutWrapper = ({children}) => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
    <Layout style={{flex: 1}}>
      {children}
    </Layout>
  </ApplicationProvider>

)

export default LayoutWrapper;