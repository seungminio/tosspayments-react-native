import React, { useMemo } from "react";
import WebView from "react-native-webview";
import { Linking, Platform } from "react-native";
import SendIntentAndroid from "react-native-send-intent";
import { ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes";
import { PaymentsRequestOptions } from "./types";
import { PAYMENTS_HTML_SOURCE } from "./constants";

const Payments: React.FC<PaymentsRequestOptions> = (options) => {
  const initlizePaymentsPage = useMemo(() => {
    const reqeustOptionsString = JSON.stringify({
      ...options,
      successUrl:
        "https://smsmsmsmin.github.io/tosspayments-react-native/callback",
      failUrl:
        "https://smsmsmsmin.github.io/tosspayments-react-native/callback",
    });
    if (Platform.OS === "android")
      return `window.onload = function() {
          var clientKey = '${options.clientKey}';
          var tossPayments = TossPayments(clientKey);
          tossPayments.requestPayment('카드', ${reqeustOptionsString});
        };
        true;
        `;
    return `(function() {
          var clientKey = '${options.clientKey}';
          var tossPayments = TossPayments(clientKey);
          tossPayments.requestPayment('카드', ${reqeustOptionsString});
        })();
        true;
        `;
  }, [options]);

  const handleMessage = async (event: any) => {
    const data = JSON.parse(event?.nativeEvent?.data);
    if (data?.message) {
      return options.onError(data);
    }
    return options.onSuccess(data);
  };

  const onShouldStartLoadWithRequest = (
    event: ShouldStartLoadRequest
  ): boolean => {
    if (
      event.url.startsWith("http://") ||
      event.url.startsWith("https://") ||
      event.url.startsWith("about:blank")
    ) {
      return true;
    }
    if (Platform.OS === "android") {
      // @ts-ignore
      SendIntentAndroid.openAppWithUri(event.url)
        .then((isOpened: boolean) => {
          if (!isOpened) {
            alert("앱 실행에 실패했습니다");
          }
          return false;
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      Linking.openURL(event.url).catch((err) => {
        alert(
          "앱 실행에 실패했습니다. 설치가 되어있지 않은 경우 설치하기 버튼을 눌러주세요."
        );
      });
      return false;
    }
    return false;
  };

  return (
    <WebView
      useWebkit
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      injectedJavaScriptForMainFrameOnly={true}
      injectedJavaScript={initlizePaymentsPage}
      mixedContentMode={"compatibility"}
      onMessage={handleMessage}
      originWhitelist={["*"]}
      sharedCookiesEnabled
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      source={{
        uri: "https://smsmsmsmin.github.io/tosspayments-react-native/payments",
      }}
    />
  );
};

export default Payments;
