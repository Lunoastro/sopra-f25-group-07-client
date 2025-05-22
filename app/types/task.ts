export interface Task {
  id: string;
  name: string | null;
  description?: string | null;
  deadline?: string| null;
  startDate?: string | null;
  frequency?: number | null;
  daysVisible?: number | null;
  value?: number | null;
  color?: string | null;
  creatorId?: string | null;
  birthDate?: string | null;
  isAssignedTo?: string | null;
  luckyDraw?: boolean;
  lockedByUser?: string | null
}