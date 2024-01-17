import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 160,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      required: true,
      maxlength: 2000,
    },
    prive: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    sold: { type: Number, default: 0 },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", productSchema);
