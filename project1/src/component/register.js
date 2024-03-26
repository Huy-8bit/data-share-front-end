export async function register(username, password, email) {
    const response = await fetch('https://your-api.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email})
    });
  
    const data = await response.json();
    return data;
  }
  