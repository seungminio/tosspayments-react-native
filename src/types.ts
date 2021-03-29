export interface PaymentsRequestOptions {
  amount: number;
  orderid: string;
  orderName: string;
  cardCompany?: string;
  cardInstallmentPlan?: string;
  maxCardInstallmentPlan?: number;
  useCardPoint?: boolean;
  customerName?: string;
  customerEmail?: string;
  customerMobilePhone?: string;
  taxFreeAmount?: number;
  useInternationalCardOnly?: boolean;
  flowMode?: "DEFAULT" | "DIRECT";
  discountCode?: string;
  appScheme?: string;

  onSuccess: (data: PaymentsSuccessResponse) => void;
  onError: (error: PaymentsFailResponse) => void;
}

export interface PaymentsSuccessResponse {
  paymentKey: string;
  orderId: string;
  amount: number;
}

export interface PaymentsFailResponse {
  code: string;
  message: string;
}
