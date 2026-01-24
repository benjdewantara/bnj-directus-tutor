import {createCollection, createDirectus, readCollections, readItems, rest, staticToken,} from '@directus/sdk';
import * as process from "node:process";

const uri = process.env['URI_DIRECTUS_BACKEND']!;
const tokenStatic = process.env['TOKEN_STATIC_ADMIN']!;

const directus =
    createDirectus(uri)
        .with(staticToken(tokenStatic))
        .with(rest());

async function f12() {
    // just scratches
    const result =
        await directus.request(
            readItems(
                'web_browser',
                {}
            ),
        );

    let collections = await directus.request(
        readCollections()
    );
}

const result = await directus.request(
    createCollection({
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
        }
    )
);

let a23 = 23;