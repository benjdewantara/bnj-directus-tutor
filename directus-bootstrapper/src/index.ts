import {createDirectus, readCollections, readItems, rest, staticToken,} from '@directus/sdk';
import * as process from "node:process";

const uri = process.env['URI_DIRECTUS_BACKEND']!;
const tokenStatic = process.env['TOKEN_STATIC_ADMIN']!;

const directus =
    createDirectus(uri)
        .with(staticToken(tokenStatic))
        .with(rest());

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

let a23 = 23;