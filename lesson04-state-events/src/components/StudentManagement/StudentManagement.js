import Student from "../Student/Student";
import "./StudentManagement.css";

const StudentManagement = () => {
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
        <button>Thêm học sinh mới</button>
        <button>Sắp xếp</button>
      </div>
      <div className="student-list">
        <Student
          studentName="Nguyễn Văn A"
          classCode="12CTin"
          math={10}
          phy={8}
          chem={9}
        >
          <button>Report</button>
          <button>Like</button>
        </Student>
        <Student
          studentName="Nguyễn Văn B"
          classCode="12CH"
          math={7}
          phy={6}
          chem={5}
        />
        <Student
          studentName="Lê Văn C"
          classCode="12CT"
          math={10}
          phy={1}
          chem={5}
        />
        <Student
          studentName="Phạm Văn D"
          classCode="12A"
          math={10}
          phy={1}
          chem={5}
        />

        <Student
          studentName="Phạm Văn D"
          classCode="12A"
          math={10}
          phy={1}
          chem={5}
        />
      </div>
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
