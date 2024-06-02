export type CardDetails = {
  id: string;
  shopName: string;
  items: number;
};

export type Item = {
  id: string;
  shop: string;
  itemName: string;
  quantity: number;
};

export type Shop = {
  id: string;
  title: string;
  items: any;
};
