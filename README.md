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

## 예제

현재 지원하는 기능은 카드 일반결제입니다.

### 카드 일반결제 예시

필요 파라미터는 아래를 참고하세요.
| Prop | Type | Description | Required |
|--------------------------|-----------------------|--------------------------------------------------------------------------------------------|----------|
| clientKey | string | 클라이언트 API 키 | true |
| amount | number | 실제 결제되는 금액입니다. | true |
| orderId | string | 가맹점에서 사용하는 해당 주문에 대한 ID입니다. | true |
| orderName | string | 결제에 대한 주문명입니다. | true |
| cardCompany | string | 카드사가 고정된 상태로 결제창이 열립니다. | false |
| cardInstallmentPlan | number | 할부 개월 수가 고정된 상태로 결제창이 열립니다. | false |
| maxCardInstallmentPlan | number | 최대 할부 개월 수를 제한하기 위해 사용합니다. | false |
| useCardPoint | boolean | 카드사 포인트 사용 여부를 결정합니다. | false |
| customerName | string | 결제하는 고객의 실명입니다. | false |
| customerEmail | string | 결제하는 고객의 이메일입니다. | false |
| customerMobilePhone | string | 결제하는 고객의 휴대폰 번호입니다. | false |
| taxFreeAmount | number | 결제하는 상품에 대한 면세 금액입니다. | false |
| useInternationalCardOnly | boolean | 결제창에서 해외카드를 지원합니다. | false |
| flowMode | 'DEFAULT' \| 'DIRECT' | 토스페이먼츠의 약관 동의 페이지와 카드 선택 페이지를 건너뛰고 바로 카드사 페이지를 엽니다. | false |
| discountCode | string | 할인 코드입니다. 이 값을 주면 할인 코드에 해당하는 할인이 적용됩니다. | false |
| appScheme | string | 모바일 ISP 앱에서 가맹점 앱으로 전환하기 위해 사용됩니다. | false |
| onSuccess | void | 결제가 성공했을 때의 콜백 함수입니다. | true |
| onError | void | 결제가 실패했을 때의 콜백 함수입니다. | true |

```jsx
<Payments
  clientKey="test_ck_7XZYkKL4MrjN11xmYmar0zJwlEWR"
  orderId="TEST01010101010101"
  orderName="테스트 주문"
  amount={5000}
  onSuccess={(data) => Alert.alert("결제 성공", JSON.stringify(data))}
  onError={(error) => Alert.alert("결제 실패", JSON.stringify(error))}
/>
```
