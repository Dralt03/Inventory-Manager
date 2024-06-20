import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const ShopSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: [ItemSchema],
});

export default ShopSchema;
