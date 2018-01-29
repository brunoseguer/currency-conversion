import axios from 'axios';

class ApiClient {
  constructor(conf) {
    this.url = conf.url;
    this.appID = conf.appID;
  }

  get(params = { params: { app_id: this.appID } }, module = 'latest.json') {
    return axios.get(`${this.url}/${module}`, params)
      .then(res => res.data)
      .catch((error) => {
        console.error(error);
      });
  }
}

export default ApiClient;
