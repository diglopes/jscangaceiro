import { NegotiationDao } from "../domain/negotiation/NegotiationDao";
import { ConnectionFactory } from "./ConnectionFactory";

export async function getNegotiationDao() {
  try {
    const conn = await ConnectionFactory.getConnection();
    return new NegotiationDao(conn);
  } catch (error) {
    throw error;
  }
}
