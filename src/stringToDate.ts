export default function stringToDate(texto: string): Date {
  const [data, tempo] = texto.split(" ");
  const [dia, mes, ano] = data.split("/").map(Number);
  const [hora, minuto] = tempo.split(":").map(Number);
  return new Date(ano, mes - 1, dia, hora, minuto);
}

export function formatarDataExtenso(data: Date): string {
  return data.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
