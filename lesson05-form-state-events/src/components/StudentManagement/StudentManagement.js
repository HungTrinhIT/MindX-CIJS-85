import { useState } from "react";
import Student from "../Student/Student";
import "./StudentManagement.css";
import StudentTable from "../StudentTable/StudentTable";
import AddNewStudent from "../AddNewStudent/AddNewStudent";
//  Server => [  student, student ,...] => [<Student/>, <Student/>, <Student/>] => JSX => UI

const studentMockData = [
  {
    studentName: "Nguyễn Văn A",
    classCode: "12CTin",
    math: 10,
    phy: 8,
    chem: 9,
  },
  {
    studentName: "Lee Chong Wei",
    classCode: "12B",
    math: 5,
    phy: 6,
    chem: 9,
  },
  {
    studentName: "CR7",
    classCode: "12ABCD",
    math: 5,
    phy: 10,
    chem: 9,
  },
  {
    studentName: "Lin Dan",
    classCode: "12A",
    math: 10,
    phy: 7,
    chem: 7,
  },
];

const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentMockData);

  const onAddStudentHandler = (student) => {
    setStudentList([...studentList, student]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Dự án quản lý học sinh</h1>
      <AddNewStudent addNewStudent={onAddStudentHandler} />
      <div className="d-flex align-items-center justify-content-end gap-2 my-3">
        <button className="btn btn-primary" onClick={onAddStudentHandler}>
          Thêm học sinh mới
        </button>
        <button className="btn btn-success">Sắp xếp</button>
      </div>
      <StudentTable studentList={studentList} />
    </div>
  );
};

export default StudentManagement;

/*
  Props:
    - Được truyền từ component cha -> component con
    - Tham số mặc định của bất kì 1 component
    - READ ONLY (không thể thay đổi)
    - ReactJS => One way data binding 
    (dữ liệu truyền thông prosp => cha -> con)
*/

// Cách 2
// Rendering list react element
// let studentListElements = [];
// for (let i = 0; i < studentList.length; i++) {
//   const { studentName, classCode, math, phy, chem } = studentList[i];
//   studentListElements.push(
//     <Student
//       studentName={studentName}
//       classCode={classCode}
//       math={math}
//       phy={phy}
//       chem={chem}
//     />
//   );
// }

/*
  - Câu hỏi 1: Tại sao khi render 1 list react element cần có unique key
  - Câu hỏi 2: Shallow comparison của React khi cập nhật state  
  - Tìm hiểu trước:
    + Form trong ReactJS
    + Render tất cả những học sinh (DONE)
    + Thêm học sinh (với form) 
    + Chức năng Delete học sinh
    + Sắp xếp học sinh theo GPA Tăng dần
    + Sắp xếp học sinh theo GPA Giảm dần
    + Sắp xếp học sinh theo A -> Z
    + Sắp xếp học sinh theo Z -> A


*/
