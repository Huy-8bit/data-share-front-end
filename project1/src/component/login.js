export async function login(username, password) {
    const response = await fetch('https://your-api.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
    return data;
  }
  
  // You can add more API functions here...
  