import { useEffect, useState } from "react";

import AddNewStudent from "../AddNewStudent/AddNewStudent";
import StudentTable from "../StudentTable/StudentTable";
import { studentMockData } from "../../utils/mockData";

import "./StudentManagement.css";
import { calcStudentGPA } from "../../utils/helpers";

const FILTER_OPTIONS = {
  DEFAULT: 0,
  GPA_ASCENDING: 1,
  GPA_DESCENDING: 2,
  A_TO_Z: 3,
  Z_TO_A: 4,
};

const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentMockData || []);
  const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS.DEFAULT);

  const onAddStudentHandler = () => {
    const newStudent = {
      studentName: "New Student",
      classCode: "Football",
      math: 10,
      phy: 10,
      chem: 10,
    };

    setStudentList([...studentList, newStudent]);
  };

  const handleChangeFilterOption = (e) => setSelectedFilter(e.target.value);

  const getStudentListByFilterOption = () => {
    switch (+selectedFilter) {
      case FILTER_OPTIONS.GPA_ASCENDING:
        // 10 5 7 6
        // 5 10 
        return studentList.sort(
          (a, b) => calcStudentGPA(a) > calcStudentGPA(b)
        );
      case FILTER_OPTIONS.GPA_DESCENDING:
        return studentList.sort(
          (a, b) => calcStudentGPA(b) > calcStudentGPA(a)
        );
      case FILTER_OPTIONS.DEFAULT:
        return studentList;
      case FILTER_OPTIONS.Z_TO_A:
        return studentList.sort((a, b) => {
          return b.studentName.localeCompare(a.studentName);
        });
      case FILTER_OPTIONS.A_TO_Z:
        return studentList.sort((a, b) => {
          // c a b e
          //  refString.localCompare(compareStr)
          // return (-) if  ref đứng trước com
          // return (+) if ref đứng sau
          return a.studentName.localeCompare(b.studentName);
        });
      default:
        return studentList;
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Dự án quản lý học sinh</h1>
      <div className="d-flex align-items-center justify-content-end gap-3 mb-5">
        <button
          className="btn btn-primary"
          onClick={onAddStudentHandler}
          data-bs-toggle="modal"
          data-bs-target="#addStudentForm"
        >
          Thêm học sinh mới
        </button>
        <select
          class="form-select"
          style={{ width: "200px" }}
          onChange={handleChangeFilterOption}
          value={selectedFilter}
        >
          <option value={FILTER_OPTIONS.DEFAULT}>Sắp xếp</option>
          <option value={FILTER_OPTIONS.GPA_DESCENDING}>GPA giảm dần</option>
          <option value={FILTER_OPTIONS.GPA_ASCENDING}>GPA tăng dần</option>
          <option value={FILTER_OPTIONS.A_TO_Z}>A -&gt; Z</option>
          <option value={FILTER_OPTIONS.Z_TO_A}>Z -&gt; A</option>
        </select>
      </div>
      <StudentTable studentList={getStudentListByFilterOption()} />
      <AddNewStudent />
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

/*
  Sort rules:
    [a , b]
    + return số > 0: b đứng trước a => [b ,  a]
    + return số < 0: a đứng trước v => [a , b]
    + 0: keep
*/
