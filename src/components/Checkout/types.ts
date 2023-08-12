import type { CurrencyOption } from '@constants/currencyOption'

export type CheckoutOptions = {
  amount: number
  propertyAddress: string
  currency: CurrencyOption
  rpcUrl: string
  feeBeneficiary?: string
  feePercentage?: number
  payload?: Uint8Array | string
}