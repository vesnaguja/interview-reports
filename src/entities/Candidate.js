class Candidate {
  constructor(id, name, email, birthday, education) {
    this.avatar = 'http://localhost:3000/interview-reports/images/person_placeholder.png';
    this.id = id;
    this.name = name;
    this.email = email.toLowerCase();
    this.birthday = new Date(birthday).toLocaleDateString('en-GB').replaceAll('/', '.');
    this.education = education;
  }
}

export default Candidate;