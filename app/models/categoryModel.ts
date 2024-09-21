import { Schema, model } from "mongoose";
import { CategoryDocument } from "../lib/types/category";

const categorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true },
});

export const Category = model<CategoryDocument>("Category", categorySchema);