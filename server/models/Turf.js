import mongoose from 'mongoose';

const turfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Turf name is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Turf type is required'],
    enum: ['Cricket', 'Football', 'Badminton', 'Multi-Sports'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  images: {
    type: [String],
    default: [],
  },
  pricePerHour: {
    type: Number,
    required: [true, 'Price per hour is required'],
  },
  amenities: {
    type: [String],
    default: [],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const Turf = mongoose.model('Turf', turfSchema);
export default Turf;
