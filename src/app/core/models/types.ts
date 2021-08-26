
export type OderInformation = {
  orderNumber: number;
  buyerFullName: string;
  buyerPhoneNumber: number;
  buyerEmail: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  region: string;
  country: string;
};

export type PromiseDates =  {
  packPromiseMin: string;
  packPromiseMax: string;
  shipPromiseMin: string;
  shipPromiseMax: string;
  deliveryPromiseMin: string;
  deliveryPromiseMax: string;
  readyPickupPromiseMin: string;
  readyPickupPromiseMax: string;
};

export type Products =  {
  name: string;
  qty: number;
  weight: number;
};

export type OrderDetails = {
  orderInfo: OderInformation;
  shippingInfo: ShippingInfo;
  promiseDates: PromiseDates;
  items: Products[];
};
