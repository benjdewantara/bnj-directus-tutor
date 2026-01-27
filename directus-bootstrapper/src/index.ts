import {
    CollectionType,
    createCollection,
    createDirectus, Query,
    readCollections, ReadItemOutput,
    readItems,
    rest, RestCommand,
    staticToken,
} from '@directus/sdk';
import * as process from 'node:process';
import {Schema} from "./Schema.js";

const uri = process.env['URI_DIRECTUS_BACKEND']!;
const tokenStatic = process.env['TOKEN_STATIC_ADMIN']!;

const directus =
    createDirectus<Schema>(uri)
        .with(staticToken(tokenStatic))
        .with(rest());

async function f12() {
    // just scratches
    const result = await directus.request(readItems('web_browser', {}));
    let collections = await directus.request(readCollections());
}

async function f36() {
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
        })
    );
}

async function f184() {
    const result1 = await directus.request(
        createCollection({
            collection: 'director_configuration',
            fields: [
                {
                    field: 'id',
                    type: 'integer',
                    meta: {
                        hidden: true,
                        interface: 'input',
                        readonly: true,
                    },
                    schema: {
                        is_primary_key: true,
                        has_auto_increment: true,
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
                                    text: '$t:published',
                                    value: 'published',
                                    color: 'var(--theme--primary)',
                                },
                                {
                                    text: '$t:draft',
                                    value: 'draft',
                                    color: 'var(--theme--foreground)',
                                },
                                {
                                    text: '$t:archived',
                                    value: 'archived',
                                    color: 'var(--theme--warning)',
                                },
                            ],
                        },
                        interface: 'select-dropdown',
                        display: 'labels',
                        display_options: {
                            showAsDot: true,
                            choices: [
                                {
                                    text: '$t:published',
                                    value: 'published',
                                    color: 'var(--theme--primary)',
                                    foreground: 'var(--theme--primary)',
                                    background: 'var(--theme--primary-background)',
                                },
                                {
                                    text: '$t:draft',
                                    value: 'draft',
                                    color: 'var(--theme--foreground)',
                                    foreground: 'var(--theme--foreground)',
                                    background: 'var(--theme--background-normal)',
                                },
                                {
                                    text: '$t:archived',
                                    value: 'archived',
                                    color: 'var(--theme--warning)',
                                    foreground: 'var(--theme--warning)',
                                    background: 'var(--theme--warning-background)',
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
            ],
            schema: {},
            meta: {
                archive_field: 'status',
                archive_value: 'archived',
                unarchive_value: 'draft',
                singleton: true,
            },
        })
    );
}

let restCommand =
    readItems(
        'director_configuration',
        {}
    );

let a336 = await directus.request(
    restCommand
);

let a23 = 23;
