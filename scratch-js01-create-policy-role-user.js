// make admin user have a fixed access token

let hostname = `app-ezmq.horbo.id`;
let uri = `http://${hostname}:8055`;
let accessTokenAdmin = `UaTM1wd2Hpp7ho0SlU-azDaxoYjNcq0r`;

async function createPolicy() {
  await fetch(`${uri}/policies`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      name: 'Public User Policy',
      admin_access: true,
      app_access: true,
    }),
    method: 'POST',
  });
}

async function createRole() {
  await fetch(`${uri}/roles`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      name: 'Public Role',
    }),
    method: 'POST',
  });
}

async function listPolicy() {
  await fetch(`${uri}/policies`, {
    headers: {},
    method: 'GET',
  });
}

async function deleteAssignmentPolicyWithRole(roleGuid) {
  await fetch(`http://app-ezmq.horbo.id:8055/roles/${roleGuid}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      policies: {
        create: [],
        update: [],
        delete: [
          '74124fff-60f9-436b-8a78-3952c7fdce6c',
          '39703e93-f4e6-47ba-ae55-fae4d6ee44e0',
          'd0f5f3df-b213-4666-8bad-c5a7c0dfa588',
        ],
      },
    }),
    method: 'PATCH',
  });
}

async function createAssignmentPolicyWithRole(roleGuid) {
  await fetch(`http://app-ezmq.horbo.id:8055/roles/${roleGuid}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      policies: {
        create: [
          {
            role: roleGuid,
            policy: { id: '426251fd-6e78-43f0-bc32-dfe26ce7bbb8' },
          },
        ],
        update: [],
        delete: [],
      },
    }),
    method: 'PATCH',
  });
}
