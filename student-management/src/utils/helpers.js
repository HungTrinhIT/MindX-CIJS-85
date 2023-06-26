export const calcStudentGPA = (student = {}) =>
  (student.math + student.phy + student.chem) / 3;
