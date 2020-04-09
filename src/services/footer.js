import API from './api';
export const footerService = {
  create,
  update,
  getAll
}
async function getAll() {
  try {
    const res = await API.get(`footer/`,{
      footers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true,
         Authorization: JSON.parse(sessionStorage.getItem('docmz_user')).token
     },
    })
    console.log(res)
    return res.data.footer
  } catch (error) {
    return Promise.reject(error)
  }
}
async function create (payload) {
  try {
      const res = await API.post(`footer/`,{item_list:payload},{
        footers: {
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
    footers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
   payload
  }
  try {
      const res = await API.put(`footer/`,requestOptions)
      console.log(res)
      return res.data
  }   catch (error) {
      return Promise.reject(error)
  }
}
