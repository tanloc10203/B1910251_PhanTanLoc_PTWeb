import createApiClient from "./api.service";

class ContactService {
  constructor(baseUrl = "/api/contacts") {
    this.api = createApiClient(baseUrl);
  }

  async getAll() {
    return await this.api.get("/");
  }

  async create(data) {
    return await this.api.post("/", data);
  }

  async deleteAll() {
    return await this.api.delete("/");
  }

  async get(id) {
    return await this.api.get(`/${id}`);
  }

  async update(id, data) {
    return await this.api.put(`/${id}`, data);
  }

  async delete(id) {
    return await this.api.delete(`/${id}`);
  }
}

export default new ContactService();
