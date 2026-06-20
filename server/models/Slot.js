import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  turfId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turf',
    required: [true, 'Turf ID reference is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required'],
  },
  endTime: {
    type: String,
    required: [true, 'End time is required'],
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Slot = mongoose.model('Slot', slotSchema);
export default Slot;
