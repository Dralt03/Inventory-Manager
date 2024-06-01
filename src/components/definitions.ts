export type CardDetails = {
  shopName: string;
  items: number;
};

export type Item = {
  id: number;
  shop: string;
  itemName: string;
  quantity: number;
};

export type Shop = {
  id: string;
  title: string;
  items: Array<object>;
};
