import { Request, Response } from 'express';
import { StudentServices } from './student.create';
import studentValidationSchema from './students.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    //create a validation using zod
    const { student: studentData } = req.body;

    //data validation zod schema
    const zodParseData = studentValidationSchema.parse(studentData);

    //will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(zodParseData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const findAllStudent = async (req: Request, res: Response) => {
  // const {student: allStudent} = req.find;

  try {
    const result = await StudentServices.findAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'student are retiever successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const singleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.studentIdDataDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student id diye check kora',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "successfully data don't pass",
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  findAllStudent,
  singleStudent,
};
