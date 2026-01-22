// create collection `web_browser`

hostname = `app-ezmq.horbo.id`;
uri = `http://${hostname}:8055`;
accessTokenAdmin = `UaTM1wd2Hpp7ho0SlU-azDaxoYjNcq0r`;

async function createCollectionWebBrowser() {
  await fetch(`${uri}/collections`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      collection: 'web_browser',
      fields: [
        {
          field: 'id',
          type: 'uuid',
          meta: {
            hidden: true,
            readonly: true,
            interface: 'input',
            special: ['uuid'],
          },
          schema: {
            is_primary_key: true,
            length: 36,
            has_auto_increment: false,
          },
        },
        {
          field: 'status',
          type: 'string',
          meta: {
            width: 'full',
            options: {
              choices: [
                {
                  text: '$t:CREATED',
                  value: 'CREATED',
                  color: 'var(--theme--primary)',
                },
              ],
            },
            interface: 'select-dropdown',
            display: 'labels',
            display_options: {
              showAsDot: true,
              choices: [
                {
                  text: '$t:CREATED',
                  value: 'CREATED',
                  color: 'var(--theme--primary)',
                  foreground: 'var(--theme--primary)',
                  background: 'var(--theme--primary-background)',
                },
              ],
            },
          },
          schema: {
            default_value: 'draft',
            is_nullable: false,
          },
        },
        {
          field: 'sort',
          type: 'integer',
          meta: {
            interface: 'input',
            hidden: true,
          },
          schema: {},
        },
        {
          field: 'user_created',
          type: 'uuid',
          meta: {
            special: ['user-created'],
            interface: 'select-dropdown-m2o',
            options: {
              template: '{{avatar}} {{first_name}} {{last_name}}',
            },
            display: 'user',
            readonly: true,
            hidden: true,
            width: 'half',
          },
          schema: {},
        },
        {
          field: 'date_created',
          type: 'timestamp',
          meta: {
            special: ['date-created'],
            interface: 'datetime',
            readonly: true,
            hidden: true,
            width: 'half',
            display: 'datetime',
            display_options: {
              relative: true,
            },
          },
          schema: {},
        },
        {
          field: 'user_updated',
          type: 'uuid',
          meta: {
            special: ['user-updated'],
            interface: 'select-dropdown-m2o',
            options: {
              template: '{{avatar}} {{first_name}} {{last_name}}',
            },
            display: 'user',
            readonly: true,
            hidden: true,
            width: 'half',
          },
          schema: {},
        },
        {
          field: 'date_updated',
          type: 'timestamp',
          meta: {
            special: ['date-updated'],
            interface: 'datetime',
            readonly: true,
            hidden: true,
            width: 'half',
            display: 'datetime',
            display_options: {
              relative: true,
            },
          },
          schema: {},
        },
        {
          field: 'brand',
          type: 'string',
          meta: {
            interface: 'input',
            special: null,
            required: true,
          },
          schema: {},
        },
      ],
      schema: {},
      meta: {
        sort_field: 'sort',
        archive_field: 'status',
        archive_value: 'archived',
        unarchive_value: 'draft',
        singleton: false,
      },
    }),
    method: 'POST',
  });
}

async function createRelationsWebBrowser() {
  await fetch(`${uri}/relations`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      collection: 'web_browser',
      field: 'user_created',
      related_collection: 'directus_users',
      schema: {},
    }),
    method: 'POST',
  });

  await fetch(`${uri}/relations`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      collection: 'web_browser',
      field: 'user_updated',
      related_collection: 'directus_users',
      schema: {},
    }),
    method: 'POST',
  });
}

async function createFieldsWebBrowser() {
  await fetch(`${uri}/fields/web_browser`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessTokenAdmin}`,
    },
    body: JSON.stringify({
      type: 'string',
      meta: {
        interface: 'input',
        special: null,
        required: true,
      },
      field: 'brand',
    }),
    method: 'POST',
  });
}

await createCollectionWebBrowser();
await createRelationsWebBrowser();
// await createFieldsWebBrowser();
console.log(`Created collection web_browser with relations and fields.`);
