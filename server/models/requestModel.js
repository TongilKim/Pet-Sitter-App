const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  sitter_id: { type: Schema.Types.ObjectId, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  cost: { type: Number, required: true },
  accepted: { type: Boolean, default: false },
  declined: { type: Boolean, default: false },
  paid: { type: Boolean, default: false },
  readByOwner: { type: Boolean, default: false },
  readBySitter: { type: Boolean, default: false },
});

const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;
