import { StudentModel } from './student.module';
import { Student } from './student/students.interface';

//cate a data post
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
};

//all data get
const findAllStudentFromDB = async () => {
  const result = await StudentModel.find();

  return result;
};
//ceck id
const studentIdDataDB = async (id: string) => {
  const singleStudentId = await StudentModel.findOne({ id });
  return singleStudentId;
};

export const StudentServices = {
  createStudentIntoDB,
  findAllStudentFromDB,
  studentIdDataDB,
};
