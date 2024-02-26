let baseUrl = 'http://localhost:3000'
import axios from 'axios'

export async function addproductsss(values) {
  try {
    const response = await fetch(`${baseUrl}/api/product/addproduct/`, {
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
export async function productList() {
  try {
    const response = await fetch(`${baseUrl}/api/product/getproduct/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json() // Convert response to JSON
      console.log('d', data)
      return data // Return the response data
    } else {
      // Handle non-OK responses
      console.error('Error:', response.statusText)
    }
  } catch (error) {
    console.error('network error', error)
  }
}
export async function deleteProduct(id) {
  try {
    console.log('get id', id)
    const response = await fetch(`${baseUrl}/api/product/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      const data = await response.json()
      console.log('delete data', data)
      return data
    } else {
      console.error('Error', response.statusText)
    }
  } catch (error) {
    console.log('network error', error)
  }
}
