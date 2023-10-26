let baseUrl = 'http://localhost:3000'
export async function addNewuser(values) {
  try {
    const res = await fetch(`${baseUrl}/api/newuser/addNewUser/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (res.ok) {
      const data = await res.json()
      return data
    } else {
      console.log('Error', res.statusText)
    }
  } catch (error) {
    console.error('network error', error)
  }
}
export async function getUsersss() {
  try {
    const response = await fetch(`${baseUrl}/api/newuser/getNewUser/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      console.log('Error', response.statusText)
    }
  } catch (error) {
    console.error('network error', error)
  }
}
