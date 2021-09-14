class Reports {
  constructor(
    id,
    candidateId,
    candidateName,
    companyId,
    companyName,
    interviewDate,
    phase,
    status,
    note
  ) {
    this.id = id;
    this.candidateId = candidateId;
    this.candidateName = candidateName;
    this.companyId = companyId;
    this.companyName = companyName;
    this.interviewDate = new Date(interviewDate)
      .toLocaleDateString("en-GB")
      .replaceAll("/", ".");
    this.phase = phase;
    this.status = status;
    this.note = note;
  }
}

export default Reports;
