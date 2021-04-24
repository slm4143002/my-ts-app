import axios from "axios";

class PureFM {
  static all(): any {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}

 export default PureFM;
// export const get = async () => {
//   return axios.get('https://wp-kyoto.cdn.rabify.me/wp-json')
// }
