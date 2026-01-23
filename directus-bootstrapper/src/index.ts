import {
    createDirectus,
    readItem,
    readItems,
    rest,
    staticToken,
    withToken,
} from '@directus/sdk';

const directus =
    createDirectus("http://app-xkum.horbo.id:8055")
        .with(staticToken(`UaTM1wd2Hpp7ho0SlU-azDaxoYjNcq0r`))
        .with(rest());

const result =
    await directus.request(
        readItems(
            "web_browser",
            {}
        )
    );

let a23 = 23;