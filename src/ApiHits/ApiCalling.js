let baseUrl = 'http://localhost:3000'

export async function loginadmin(values) {
  try {
    const response = await fetch(`${baseUrl}/api/auth/signin/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    if (response.ok) {
      const data = await response.json() // Convert response to JSON

      return data // Return the response data
    } else {
      // Handle non-OK responses
      console.error('Error:', response.statusText)
    }
  } catch (error) {
    console.error('Network Error:', error)
    // Handle network errors or other exceptions here
  }
}
