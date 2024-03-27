export async function login(username, password) {
  const formdata = new FormData();
formdata.append("username", username);
formdata.append("password", password);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("http://13.215.184.223/auth/login", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
  
  