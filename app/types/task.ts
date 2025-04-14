export interface Task {
  id: string;
  name: string | null;
  description?: string | null;
  deadline?: Date | null;
  startDate?: Date | null;
  frequency?: number | null;
  reminder?: number | null;
  value?: number | null;
  colorId?: string | null;
  birthDate?: Date | null;
  isAssignedTo?: string | null;
}