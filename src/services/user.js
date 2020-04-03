import API from './api';

export const userService = {
  login,
  logout,
  register,
}

function logout () {
  sessionStorage.removeItem('docmz_user')
}
async function register (user) {
  const payload = {
    name:user.name,
    number:user.number,
    email: user.email,
    password: user.password,
    username: user.email.split('@')[0]
  }
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
   ...payload
  }
  try {
      const res = await API.post(`user/signup`,requestOptions)
      console.log(res)
      return res.data
  }   catch (error) {
      return Promise.reject(error)
  }

}

async function login (email, password) {
  console.log(email,password)

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true
   },
   email,
   password
  }
try {
  const res = await API.post('user/signin', requestOptions)
      console.log(res);
      if (res.data.token) {
        sessionStorage.setItem('docmz_user', JSON.stringify(res.data))
        }
      return res.data
  }
catch (error) {
      console.log(error)
      return Promise.reject('Invalid Credentials')
    }
}
