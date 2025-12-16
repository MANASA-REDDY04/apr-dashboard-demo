export interface Kpi {
    id: string;
    title: string;
    value: number | string;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}
