export class ApplicationException extends Error {
  constructor(message = "") {
    super(message);
    this.name = this.constructor.name;
  }
}

const exception = ApplicationException;

export function isApplicationException(err) {
  return (
    err instanceof exception || Object.getPrototypeOf(err) instanceof exception
  );
}

export function getExceptionMessage(err) {
  if (isApplicationException(err)) {
    return err.message;
  } else {
    console.error(err);
    return "Não foi possivel realizar a operação.";
  }
}
