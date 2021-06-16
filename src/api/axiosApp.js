import axios from 'axios';

export default axios.create({
  //baseURL: 'http://localhost:8080/api'
  baseURL: `${window.location.protocol}//${window.location.hostname==='localhost'?'localhost:8080':'ikigai.smartkaizen.com'}/api`
  //baseURL: `${window.location.protocol}//${window.location.hostname}/api`
});
