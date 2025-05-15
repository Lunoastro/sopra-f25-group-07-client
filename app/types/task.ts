export interface Task {
  luckyDraw?: boolean;

  id: string;
  name: string | null;
  description?: string | null;
  deadline?: Date | null;
  // startDate?: Date | null;
  frequency?: number | null;
  daysVisible?: number | null;
  value?: number | null;
  color?: string | null;
  creatorId?: string | null;
  birthDate?: Date | null;
  isAssignedTo?: string | null;
}