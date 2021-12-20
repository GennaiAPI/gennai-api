import { RESTDataSource } from 'apollo-datasource-rest'

export class StarWarsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://swapi.dev/api/"
  }

  async getMovie(id) {
    // Send a GET request to the specified endpoint
    return this.get(`films/${id}`);
  }
}