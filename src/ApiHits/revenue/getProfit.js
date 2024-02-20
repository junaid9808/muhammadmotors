let baseUrl = 'http://localhost:3000';

export async function getProfit(days) {
  try {
    if (!days) return; 
    const res = await fetch(`${baseUrl}/api/installmentreciept/getInstallment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({days: days })
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Network error:', error);
    throw new Error('Failed to fetch data');
  }
}
