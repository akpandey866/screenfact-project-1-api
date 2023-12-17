// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    wallet_amount: { type: Number, required: false },
    record_fee: { type: Number, required: false },
    // You can add more fields as needed, for example:
    // email: { type: String, required: true, unique: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    versionKey: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
