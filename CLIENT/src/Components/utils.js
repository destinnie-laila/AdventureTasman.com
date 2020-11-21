async function fetchLogin(pUserName, pPassword) {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: pUserName, password: pPassword })
  };
  alert("sending " + requestOptions.body);
  const res = await fetch("http://localhost:3001/login", requestOptions);
  return res;
}

export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    fetchLogin(username, password)
      .then(res => res.json())
      .then(data => {
        alert("DATA IS" + data); // JSON data parsed by `data.json()` call
        let resultObj = JSON.parse(data)[0];
        if (resultObj.Result != 1) reject();
        else resolve();
      });
  });
}

async function submitComment(pUserName, pComment) {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: pUserName, comment: pComment })
  };
  alert("sending " + pComment + ": " + requestOptions.body);
  const res = await fetch("http://localhost:3001/comment", requestOptions);
  return res;
}

export async function storeComment(username, pcomment) {
  alert("Comment is " + pcomment);
  return new Promise(resolve => {
    submitComment(username, pcomment)
      .then(res => res.json())
      .then(data => {
        alert("DATA IS" + data); // JSON data parsed by `data.json()` call
        let resultObj = JSON.parse(data)[0];
        if (
          resultObj.Result != "Stored a comment" // Took out reject() method which allowed it to not log out once comment was submitted but keeps it in a loggin in disablled state when you log out
        );
        else resolve();
      });
  });
}
