import { NegotiationDao } from "../domain/negotiation/NegotiationDao.js";
import { ConnectionFactory } from "./ConnectionFactory.js";

export async function getNegotiationDao() {
  try {
    const conn = await ConnectionFactory.getConnection();
    return new NegotiationDao(conn);
  } catch (error) {
    throw error;
  }
}
