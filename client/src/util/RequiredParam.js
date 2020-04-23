export function requiredParam(paramName) {
  throw new Error(`${paramName} é um parâmetro obrigatório!`);
}
