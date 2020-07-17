import axios from 'axios';


export default class APIProxy {
    static domain = 'www.mocky.io/v2/5a29b5672e00004a3ca09d33';
    static port = '';

    static getAddress(path='') {
        return `http://${this.domain}${this.port ? `:${this.port}` : ''}${path}`;
      }

    static get({ data={} }) {
        return axios.get(this.getAddress(), { params: data })
    }

}