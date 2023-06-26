import "./Student.css";

const Student = (props) => {
  const { student } = props;
  const { studentName, classCode, math, phy, chem } = student || {};
  const gpa = ((math + phy + chem) / 3).toFixed(1);
  return (
    <tr>
      <th scope="row">1</th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td>
    </tr>
  );
};

export default Student;
