import { Fragment, useState } from "react";
import { FiEye } from "react-icons/fi";
import ReportModal from "../../../components/ReportModal";

const Report = ({ report }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <tr id={report.id}>
        <td>{report.companyName}</td>
        <td>{report.getInterviewDate()}</td>
        <td>{report.status}</td>
        <td className="text-center">
          <a href="#id">
            <FiEye className="text-primary" onClick={() => setModalShow(true)} />
          </a>
        </td>
      </tr>
      <ReportModal report={report} show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

export default Report;
