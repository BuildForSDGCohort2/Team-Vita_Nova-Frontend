export default class User {
  constructor(
    first_name,
    last_name,
    email,
    company_name,
    website,
    role,
    corporate,
    password
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.company_name = company_name;
    this.website = website;
    this.role = role;
    this.corporate = corporate;
    this.password = password;
  }
}
