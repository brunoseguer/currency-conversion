import axios from 'axios';

class ApiClient {
  constructor(url) {
    this.url = url;
  }

  get(params = {}, module = 'latest') {
    console.log(`Requesting... ${this.url}`);
    return axios.get(`${this.url}/${module}`, params)
      .then(res => res.data)
      .catch((error) => {
        console.log(error);
      });
  }
}

export default ApiClient;
