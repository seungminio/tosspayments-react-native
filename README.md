# 토스페이먼츠 React Native 모듈

토스페이먼츠 리액트 네이티브 모듈입니다. 토스페이먼츠에서 공식적으로 지원하는 Javascript SDK를 사용하여 리액트 네이티브 모듈로 구성했습니다.

## 설치하기

```
$ npm install tosspayments-react-native
```

```
$ yarn add tosspayments-react-native
```

`tosspayments-react-native`는 `v11.3.2`이상의 `react-native-webview`와 `v1.2.3`이상의 `react-native-send-intent`를 필요로 합니다. 설치되어 있지 않은 경우 모듈 사용이 불가하오니 꼭 설치해주세요.

## 설정하기

> [iamport-react-native](https://github.com/iamport/iamport-react-native) 모듈 설정 내용으로 작성했습니다.

#### 1. 외부 앱 리스트 등록

3rd party앱(간편결제)를 실행할 수 있도록 외부 앱 리스트를 등록해야합니다.

```html
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>kftc-bankpay</string>
  <!-- 계좌이체 -->
  <string>ispmobile</string>
  <!-- ISP모바일 -->
  <string>itms-apps</string>
  <!-- 앱스토어 -->
  <string>hdcardappcardansimclick</string>
  <!-- 현대카드-앱카드 -->
  <string>smhyundaiansimclick</string>
  <!-- 현대카드-공인인증서 -->
  <string>shinhan-sr-ansimclick</string>
  <!-- 신한카드-앱카드 -->
  <string>smshinhanansimclick</string>
  <!-- 신한카드-공인인증서 -->
  <string>kb-acp</string>
  <!-- 국민카드-앱카드 -->
  <string>mpocket.online.ansimclick</string>
  <!-- 삼성카드-앱카드 -->
  <string>ansimclickscard</string>
  <!-- 삼성카드-온라인결제 -->
  <string>ansimclickipcollect</string>
  <!-- 삼성카드-온라인결제 -->
  <string>vguardstart</string>
  <!-- 삼성카드-백신 -->
  <string>samsungpay</string>
  <!-- 삼성카드-삼성페이 -->
  <string>scardcertiapp</string>
  <!-- 삼성카드-공인인증서 -->
  <string>lottesmartpay</string>
  <!-- 롯데카드-모바일결제 -->
  <string>lotteappcard</string>
  <!-- 롯데카드-앱카드 -->
  <string>cloudpay</string>
  <!-- 하나카드-앱카드 -->
  <string>nhappcardansimclick</string>
  <!-- 농협카드-앱카드 -->
  <string>nonghyupcardansimclick</string>
  <!-- 농협카드-공인인증서 -->
  <string>citispay</string>
  <!-- 씨티카드-앱카드 -->
  <string>citicardappkr</string>
  <!-- 씨티카드-공인인증서 -->
  <string>citimobileapp</string>
  <!-- 씨티카드-간편결제 -->
  <string>kakaotalk</string>
  <!-- 카카오톡 -->
  <string>payco</string>
  <!-- 페이코 -->
  <string>lpayapp</string>
  <!-- 롯데 L페이 -->
  <string>hanamopmoasign</string>
  <!-- 하나카드 공인인증앱 -->
  <string>wooripay</string>
  <!-- 우리페이 -->
  <string>nhallonepayansimclick</string>
  <!-- NH 올원페이 -->
  <string>hanawalletmembers</string>
  <!-- 하나카드(하나멤버스 월렛) -->
</array>
```

#### 2. App Transport Security 설정

```html
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoadsInWebContent</key>
  <true />
  <key>NSAllowsArbitraryLoads</key>
  <true />
</dict>
```
