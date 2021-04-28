import axios from "axios";

import { API_URL } from "../env";
import { DocumentDetails } from "../types";

const client = axios.create({
  baseURL: API_URL,
});

const api = {
  async validate(hash: string): Promise<DocumentDetails> {
    const { data } = await client.get(`/documents/${hash}/validate`);

    return data;
  },
};

export default api;
