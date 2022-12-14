import ProductsAdapter from "../adapters/productsAdapter";

export default class ProductsClient {

    constructor() {
        this.adapter = new ProductsAdapter();
    }

    /**
     * fetch a list of products using the ProductsAdapter
     *
     * @param {Number} pageNr - the page number to fetch (starts at 1)
     * @param {Number} pageSize - the number of products per page
     * @return {null|Response} - response object enriched with {Object} data,
     *     or null in case of error (FIXME)
     */
    async list(pageNr, pageSize) {
        try {
            const response = await this.adapter.list(pageNr, pageSize);
            if (response === null || typeof response !== 'object') {
                return null; // TODO
            }
            if (response.statusCode !== 200) {
                return null; // TODO
            }
            return { ...response, data: JSON.parse(response.text) };
        } catch (error) {
            return null; // TODO
        }
    }
}