/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
import Payments from 'tosspayments-react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Payments
        clientKey="test_ck_7XZYkKL4MrjN11xmYmar0zJwlEWR"
        orderId="TEST01010101010101"
        orderName="테스트 주문"
        amount={5000}
        onSuccess={data => Alert.alert('결제 성공', JSON.stringify(data))}
        onError={error => Alert.alert('결제 실패', JSON.stringify(error))}
      />
    </SafeAreaView>
  );
};

export default App;
