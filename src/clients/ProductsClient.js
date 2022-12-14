import ProductsAdapter from '../adapters/ProductsAdapter';

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
   *     or null in case of error
   *
   *  TODO: return the response as: Either<Error, Response> object
   */
  async list(pageNr, pageSize) {
    try {
      const response = await this.adapter.list(pageNr, pageSize);
      if (response.statusCode !== 200) {
        return null; // TODO
      }
      const start = (pageNr - 1) * pageSize;
      // splice the results, just in case the API data is served by a mock API
      return response?.body?.data?.splice(start, pageSize);
    } catch (error) {
      return null; // TODO
    }
  }
}
