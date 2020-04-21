import { NegotiationDao } from "../domain/negotiation/NegotiationDao.js";
import { ConnectionFactory } from "./ConnectionFactory.js";

export function getNegotiationDao() {
  return ConnectionFactory.getConnection().then(
    (conn) => new NegotiationDao(conn)
  );
}
