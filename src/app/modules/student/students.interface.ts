import exp from 'constants';
import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContractNo: string;
  motherName: string;
  motherOccupation: string;
  motherContractNo: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lestName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Students = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  occupation: string;
  isActive: 'active' | 'isActive';
};
