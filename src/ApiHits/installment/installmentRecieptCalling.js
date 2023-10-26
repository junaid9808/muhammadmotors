let baseUrl = 'http://localhost:3000'
export async function addInstallment(values) {
  try {
    const res = await fetch(`${baseUrl}/api/installmentreciept/addInstallment/`, {
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
