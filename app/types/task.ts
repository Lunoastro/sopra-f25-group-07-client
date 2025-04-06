export interface Task {
  id: string | null;
  name: string | null;
  description?: string | null;
  deadline?: Date | null;
  value?: number | null;
  colorId?: string | null;
  birthDate?: Date | null;
  isAssignedTo?: string | null;
}