let baseUrl = 'http://localhost:3000'
export async function addCompany(values) {
  try {
    const res = await fetch(`${baseUrl}/api/company/addcompany/`, {
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
      console.error('Error', res.statusText)
    }
  } catch (error) {
    console.error('network error', error)
  }
}
export async function getCompamies() {
  try {
    const response = await fetch(`${baseUrl}/api/company/getcompanies/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json()
      console.log('dataaaaaa', data)
      return data
    } else {
      console.error('Error', response.statusText)
    }
  } catch (error) {
    console.error('network error', error)
  }
}
