import { ApplicationException } from "../../util/ApplicationException";

export class InvalidDateException extends ApplicationException {
  constructor() {
    super("A data deve estar no formato dd/mm/aaaa");
  }
}
