import { useState } from "react";
import Student from "../Student/Student";
import "./StudentManagement.css";
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

  // Cách 1
  // Rendering list react element
  const studentListElements = studentList.map((student) => (
    <Student {...student} />
  ));

  // Thêm mới một học sinh
  const onAddStudentHandler = () => {
    // Bài sau: dữ liệu new student được lấy từ form
    const newStudent = {
      studentName: "New Student",
      classCode: "Football",
      math: 10,
      phy: 10,
      chem: 10,
    };

    setStudentList([...studentList, newStudent]);
  };

  return (
    <div className="container">
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Dự án quản lý học sinh
      </h1>
      <div className="student-controller">
        <button onClick={onAddStudentHandler}>Thêm học sinh mới</button>
        <button>Sắp xếp</button>
      </div>
      <div className="student-list">{studentListElements}</div>
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
    + Chức năng Delete học sinh
    + Thêm học sinh (với form)
    + Sắp xếp học sinh theo A -> Z
    + Sắp xếp học sinh theo Z -> A
    + Sắp xếp học sinh theo GPA Tăng dần
    + Sắp xếp học sinh theo GPA Giảm dần


*/
