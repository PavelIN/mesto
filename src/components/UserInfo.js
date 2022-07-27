export default class UserInfo {
  constructor({ name, job,avatar }) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    }

    return userInfo;
  }

  getId(){
    return this._userid;
  }

  setUserInfo(userdata) {
    this._name.textContent = userdata.name;
    this._job.textContent = userdata.about;
    this._avatar.src = userdata.avatar;
    this._userid = userdata._id;
  }
}
