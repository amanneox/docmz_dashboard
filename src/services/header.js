import API from './api';
export const headerService = {
  create,
  update,
  getAll
}
async function getAll() {
  try {
    const res = await API.get(`header/`,{
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true,
         Authorization: JSON.parse(sessionStorage.getItem('docmz_user')).token
     },
    })
    const result = {
      id: res.data.header[0]._id,
      ...res.data.header[0].item_list
    }
    return result
  } catch (error) {
    return Promise.reject(error)
  }
}
async function create (payload) {
  try {
      const res = await API.post(`header/`,{item_list:payload},{
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Credentials" : true,
           Authorization: JSON.parse(sessionStorage.getItem('docmz_user')).token
       },
      })
      console.log(res)
      return res.data
  }   catch (error) {
      return Promise.reject(error)
  }
}
async function update (payload) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
   payload
  }
  try {
      const res = await API.put(`header/`,requestOptions)
      console.log(res)
      return res.data
  }   catch (error) {
      return Promise.reject(error)
  }
}
