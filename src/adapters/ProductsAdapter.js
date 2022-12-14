import superagent from 'superagent';

export default class ProductsAdapter {

    constructor() {
        this.proto = import.meta.env.VITE_PRODUCTS_API_PROTO;
        this.host = import.meta.env.VITE_PRODUCTS_API_HOST;
        this.path = import.meta.env.VITE_PRODUCTS_API_PATH;
        this.apiKey = import.meta.env.VITE_PRODUCTS_API_X_API_KEY;
    }

    /**
     * Gets the URL for fetching a page's worth of products.
     *
     * @return {String}
     */
    _getListUrl() {
        return `${this.proto}://${this.host}${this.path}`;
    }

    /**
     * Fetches a list of products from the Products API
     *
     * @param {Number} pageNr - the page number to fetch (starts at 1)
     * @param {Number} pageSize - the number of products per page
     * @return {null|Response} - response object as returned by superagent,
     *     or null in case of error (FIXME)
     */
    async list(pageNr, pageSize) {
        try {
            const url = this._getListUrl();
            return await superagent
                .get(url)
                .query({
                    page: pageNr,
                    limit: pageSize
                })
                .set('X-API-Key', this.apiKey) // unused by this API but we already support it
                .type('json')
                .accept('json');
        } catch (error) {
            return null; // TODO
        }
    }
}