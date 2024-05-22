import { Schema, model, connect } from 'mongoose';
import { Students } from './student/students.interface';

const studentSchema = new Schema<Students>({
  id: { type: String },
  name: {
    type: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lestName: {
        type: String,
        required: true,
      },
    },
  },
  gender: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  localGuardian: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
});
