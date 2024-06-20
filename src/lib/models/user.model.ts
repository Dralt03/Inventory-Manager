import { Schema, model, models } from "mongoose";
import ShopSchema from "./Shop.model";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String || null,
  },
  shops: [ShopSchema],
});

const User = models?.User || model("User", UserSchema);
export default User;
