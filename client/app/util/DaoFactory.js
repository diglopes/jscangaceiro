function getNegotiationDao() {
  return ConnectionFactory.getConnection().then(
    (conn) => new NegotiationDao(conn)
  );
}
