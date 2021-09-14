const Report = ({ report }) => {
  return (
    <tr>
      <td>{report.companyName}</td>
      <td>{report.interviewDate}</td>
      <td>{report.status}</td>
      <td>Modul</td>
    </tr>
  );
};

export default Report;
