import {DirectorConfiguration} from "./DirectorConfiguration.js";

export interface Schema {
    // regular collections are array types
    // collection_a: CollectionA[];
    // collection_b: CollectionB[]; // [!code ++]
    // singleton collections are singular types
    director_configuration: DirectorConfiguration;
    // extend the provided DirectusUser type
    // directus_users: CustomUser;
}
