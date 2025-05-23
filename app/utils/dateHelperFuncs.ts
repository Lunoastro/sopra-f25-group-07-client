export const dateFormatted = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const dateTodayFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Format date to display day name and date e.g. Wed 21/5
export const dateOfWeekFormatted = (date: Date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  const dayNumber = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed

  return `${dayName} ${dayNumber}/${month}`;
};

export const dateDayMonthFormatted = (date: Date) => {
  const dayNumber = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed
  return `${dayNumber}/${month}`
}


export const addDays = (date:Date, addedDays: number) : Date => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + addedDays);  
  return newDate
}

export async function getServerWeekDays() {
    
  const calculateWeekDaysServer = (startDateString: string) => {
    const today = new Date(startDateString);
    today.setHours(0, 0, 0, 0);
    const currentDay = today.getDay();
    const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;

    const monday = new Date(today);
    monday.setDate(today.getDate() - daysToSubtract);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      weekDays.push(day.toISOString());
    }
    return weekDays;
  };

  const initialToday = new Date().toISOString().slice(0, 10);
  return calculateWeekDaysServer(initialToday);
}