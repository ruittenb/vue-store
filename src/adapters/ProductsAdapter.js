import superagent from 'superagent';

export default class ProductsAdapter {

    constructor() {
        this.proto = import.meta.env.VITE_PRODUCTS_API_PROTO;
        this.host = import.meta.env.VITE_PRODUCTS_API_HOST;
        this.path = import.meta.env.VITE_PRODUCTS_API_PATH;
        this.apiKey = import.meta.env.VITE_PRODUCTS_API_X_API_KEY;
    }

    _getListUrl(pageNr, pageSize) {
        return `${this.proto}://${this.host}${this.path}?page=${pageNr}&limit=${pageSize}`;
    }

    async list(pageNr, pageSize) {
        try {
            return await superagent
                .get(this._getListUrl(pageNr, pageSize))
                .set('X-API-Key', this.apiKey) // unused by this API but we already support it
                .set('accept', 'json');
        } catch (error) {
            // TODO
        }
    }
}