import axios from 'axios';
import qs from 'qs';

function getApi() {
  try {
    const requestBody = {
      key1: 'value',
      key2: 'value',
    };
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    let res = await axios.post(url, qs.stringify(requestBody), config);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
console.log(getApi());
