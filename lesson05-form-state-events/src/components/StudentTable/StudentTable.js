import Student from "../Student/Student";

const StudentTable = (props) => {
  const { studentList } = props;

  const tableBody = studentList.map((student) => {
    return <Student student={student} />;
  });
  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Điểm toán</th>
            <th scope="col">Điểm lý</th>
            <th scope="col">Điểm hoá</th>
            <th scope="col">GPA</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;
