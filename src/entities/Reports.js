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
    this.interviewDate = interviewDate;
    this.phase = phase;
    this.status = status;
    this.note = note;
  }

  getInterviewDate() {
    return new Date(this.interviewDate).toISOString().replace(/T.*/,'').split('-').reverse().join('.')
  }
}

export default Reports;