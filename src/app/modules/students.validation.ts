import { z } from 'zod';

// Define a schema for the Guardian
const GuardianSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContractNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContractNo: z.string().min(1),
});

// Define a schema for the LocalGuardian
const LocalGuardianSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Define a schema for the UserName
const UserNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().min(1).optional(),
  lastName: z.string().min(1),
});

// Define a schema for the Student
const studentValidationSchema = z.object({
  id: z.string().min(1),
  name: UserNameSchema,
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string(), // Adjust this according to your actual data format
  email: z.string().email(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  contactNo: z.string().min(1),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  occupation: z.string().min(1),
  profileImg: z.string().optional(), // Adjust this according to your actual requirements
  emergencyContactNo: z.string().optional(), // Adjust this according to your actual requirements
  isActive: z.enum(['active', 'blocked']).optional(),
});

export default studentValidationSchema;
