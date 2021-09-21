class Company {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email.toLowerCase();
  }
}

export default Company;