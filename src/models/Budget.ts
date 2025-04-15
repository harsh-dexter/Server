// src/models/Budget.ts
import mongoose from 'mongoose';

const BudgetSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  amount: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
}, { timestamps: true });

export const Budget = mongoose.model('Budget', BudgetSchema);
