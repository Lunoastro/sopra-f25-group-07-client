export interface Task {
  id: string;
  name: string | null;
  description?: string | null;
  deadline?: string| null;
  // startDate?: Date | null;
  frequency?: number | null;
  daysVisible?: number | null;
  value?: number | null;
  color?: string | null;
  creatorId?: string | null;
  birthDate?: Date | null;
  isAssignedTo?: string | null;
  luckyDraw?: boolean;
  creatorName?: string | null;
  assignedToName?: string | null;
}