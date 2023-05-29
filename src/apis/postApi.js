
import axios from "axios";

export const getPost = async () => {

  const res = await axios.get(`http://localhost/posts`)

  return res.data

}
