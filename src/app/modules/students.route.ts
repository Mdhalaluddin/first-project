import express from 'express';
import { StudentControllers } from './students.controller';

const router = express.Router();

//will call controller func
router.post('/create-student', StudentControllers.createStudent);

router.get('/', StudentControllers.findAllStudent);

router.get('/:studentId', StudentControllers.singleStudent);

export const StudentRoutes = router;
