// make admin user have a fixed access token

let hostname = `app-ezmq.horbo.id`;
let uri = `http://${hostname}:8055`;
let accessTokenAdmin = `UaTM1wd2Hpp7ho0SlU-azDaxoYjNcq0r`;

async function getUserId() {
  let response = await fetch(`${uri}/users/me?fields=id`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    method: 'GET',
  });

  let responseJson = await response.json();
  let userId = responseJson.data.id;
  return userId;
}

async function applyAccessToken(userId) {
  await fetch(`${uri}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: `{"token":"${accessTokenAdmin}"}`,
    method: 'PATCH',
  });
}

await applyAccessToken(await getUserId());
console.log(`Applied access token to admin user.`);
