export default function getDatePlusSevenDays(): string {
    const today = new Date(); // Получаем сегодняшнюю дату
    today.setDate(today.getDate() + 7); // Добавляем 7 дней

    // Форматируем дату в строку в формате YYYY-MM-DD
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
    const day = String(today.getDate()).padStart(2, '0');

    return `${today.getFullYear()}-${String(today.getMonth())}-${String(today.getDate()).padStart(2, '0')} / ${year}-${month}-${day}`;
}

