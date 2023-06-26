import Student from "../Student/Student";

const StudentTable = (props) => {
  const { studentList } = props;
  console.log(
    "🚀 ~ file: StudentTable.js:5 ~ StudentTable ~ studentList:",
    studentList
  );

  const listStudentTableRow =
    studentList &&
    studentList.map((student, index) => {
      return <Student {...student} order={index} />;
    });
  return (
    <div className="student-list">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              STT
            </th>
            <th scope="col">Họ tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Điểm Toán</th>
            <th scope="col">Điểm Lý</th>
            <th scope="col">Điểm Hoá</th>
            <th scope="col">Xếp loại</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>{listStudentTableRow}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
