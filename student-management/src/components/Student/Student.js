import IconWrapper from "../IconWrapper/IconWrapper";
import "./Student.css";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
const Student = (props) => {
  const { studentName, classCode, math, phy, chem, children, order } =
    props || {};
  const gpa = ((math + phy + chem) / 3).toFixed(1);
  return (
    <tr>
      <th scope="row" className="text-center">
        {order}
      </th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{gpa}</td>

      <td>
        <div className="d-flex align-items-center gap-2">
          <IconWrapper bg="bg-secondary">
            <AiFillEdit color="white" />
          </IconWrapper>
          <IconWrapper>
            <AiOutlineDelete color="white" />
          </IconWrapper>
        </div>
      </td>
    </tr>
  );
};

export default Student;
