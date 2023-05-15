import { users } from '../database'
import mock from '@/@mock-db'
import { useRandom } from '@/@core/app'

mock.onPost('/auth/login').reply((config) => {
  const { email, password } = JSON.parse(config.data)

  let errors: Record<string, string[]> = {
    email: ['Something wrong'],
  }

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    const data = {
      email: user.email,
      fullname: user.fullname,
      token: user.token,
    }

    return [200, { data }]
  }

  else {
    errors = {
      email: ['Email or password is incorrect'],
    }
  }

  return [400, { errors }]
})

mock.onPost('/auth/check-email').reply((config) => {
  const { email } = JSON.parse(config.data)

  let errors: Record<string, string[]> = {
    email: ['Something wrong'],
  }

  const user = users.find(u => u.email === email)

  if (user) {
    errors = {
      email: ['Email already taken'],
    }

    return [400, { errors }]
  }

  return [200, { data: {} }]
})

mock.onPost('/auth/register').reply((config) => {
  const { email, firstname, lastname, password, phone_number } = JSON.parse(config.data)

  users.push({
    id: users.length + 1,
    fullname: `${firstname} ${lastname}`,
    firstname,
    lastname,
    email,
    password,
    phone_number,
    token: useRandom(64, 64), // fake random token
  })

  const data = {
    email,
    fullname: `${firstname} ${lastname}`,
    token: users[users.length - 1].token,
  }

  return [200, { data }]
})

mock.onPost('/auth/verify-otp').reply((config) => {
  const { otp_code } = JSON.parse(config.data)

  const errors: Record<string, string[]> = {
    otp_code: ['Something wrong'],
  }

  if (otp_code === '12345')
    return [200, { data: {} }]

  return [400, { errors }]
})
