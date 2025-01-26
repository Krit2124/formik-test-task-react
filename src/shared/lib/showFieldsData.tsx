export function showFieldsData(data: Record<string, string | number>): void {
  let message = "Данные успешно записаны: \n\n";
  for (const key in data) {
    message = message + (`${key}: ${data[key]} \n`);
  }
  alert(message);
}