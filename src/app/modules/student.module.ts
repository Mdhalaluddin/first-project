import { Schema, model } from 'mongoose';
import { Guardian, Student, UserName } from './student/students.interface';

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContractNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContractNo: { type: String, required: true },
});

const nameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
    massage: '{VALUE} is not required',
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
    massage: '{VALUE} is not required',
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: nameSchema,
  gender: {
    type: String,
    enum: ['Male', 'female', 'other'],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
    massage: '{VALUE} is not required',
  },
  email: {
    type: String,
    required: true,
    massage: '{VALUE} is not required',
    unique: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
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

  guardian: {
    type: guardianSchema,
    required: true,
    massage: '{VALUE} is not required',
  },
  localGuardian: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
