export interface Team {
    id: number | null;
    name: string | null;
    xp: number | null;
    level: number | null;
    code: string | null;
    members: Array<number> | null;
}
