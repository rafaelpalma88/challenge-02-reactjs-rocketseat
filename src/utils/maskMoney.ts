export function maskMoney(value: number): string {
  // Converte o número para uma string com duas casas decimais
  const formattedValue = value.toFixed(2);
  // Substitui o ponto por uma vírgula
  return formattedValue.replace('.', ',');
}
