import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  //adding option to create timestamps which will make mongoose create createdAt and updatedAt properties for a user.
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
