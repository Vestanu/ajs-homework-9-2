
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    if (!/^[\w-]+$/.test(this.name)) return false;
    if (/[\d]{4,}/.test(this.name)) return false;
    if (!/^[^\d_-]/.test(this.name)) return false;
    if (!/[^\d_-]$/.test(this.name)) return false;
    return true;
  }
}
