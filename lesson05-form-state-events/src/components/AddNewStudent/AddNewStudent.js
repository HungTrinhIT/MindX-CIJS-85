import { useState } from "react";

const AddNewStudent = (props) => {
  const [student, setStudent] = useState({
    studentName: "",
    classCode: "",
    math: null,
    phy: null,
    chem: null,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addNewStudent(student);
  };

  return (
    <div className="my-3">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-6 mb-2">
            <div>
              <label htmlFor="studentName" className="form-label">
                Họ tên
              </label>
              <input
                className="form-control"
                id="studentName"
                name="studentName"
                value={student.studentName}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="classCode" className="form-label">
              Lớp
            </label>
            <input
              className="form-control"
              id="classCode"
              name="classCode"
              value={student.classCode}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="math" className="form-label">
              Điểm toán
            </label>
            <input
              className="form-control"
              id="math"
              type="number"
              name="math"
              value={student.math}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="phy" className="form-label">
              Điểm lý
            </label>
            <input
              className="form-control"
              id="phy"
              type="number"
              name="phy"
              onChange={onChangeHandler}
              value={student.phy}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="chem" className="form-label">
              Điểm hoá
            </label>
            <input
              className="form-control"
              id="chem"
              name="chem"
              type="number"
              onChange={onChangeHandler}
              value={student.chem}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Thêm mới học sinh
        </button>
      </form>
    </div>
  );
};

export default AddNewStudent;
