const ConnectionFactory = (() => {
  const stores = ["negociacoes"];
  let connection = null;
  let closeConnMethod = null;

  return class ConnectionFactory {
    constructor() {
      throw new Error("Não é possível criar instâncias desta classe.");
    }

    static getConnection() {
      return new Promise((resolve, reject) => {
        if (connection) resolve(connection);
        const openRequest = indexedDB.open("jscangaceiro", 2);
        openRequest.onupgradeneeded = ({ target }) =>
          ConnectionFactory._createStores(target.result);
        openRequest.onsuccess = ({ target }) => {
          connection = target.result;
          closeConnMethod = connection.close;
          connection.close = () => {
            throw new Error("Não é permitido fechar a conexão diretamente!");
          };
          resolve(connection);
        };
        openRequest.onerror = ({ target }) => reject(target.error);
      });
    }

    static _createStores(connection) {
      stores.forEach((store) => {
        if (connection.objectStoreNames.contains(store)) {
          connection.deleteObjectStore(store);
          connection.createObjectStore(store, { autoIncrement: true });
        }
      });
    }

    static closeConnection() {
      closeConnMethod.apply(connection);
    }
  };
})();
