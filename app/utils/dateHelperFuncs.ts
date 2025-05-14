export const dateTomorrowFormatted = () => {
  // temporary fix until deadline can be today
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1)
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}