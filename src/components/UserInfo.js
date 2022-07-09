export default class UserInfo {
  constructor({ name, job }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    }

    return userInfo;
  }


  setUserInfo(userdata) {
    this._name.textContent = userdata.profilename;
    this._job.textContent = userdata.job;
  }
}
