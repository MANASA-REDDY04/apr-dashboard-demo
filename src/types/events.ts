export interface AppEvent {
    id: string;
    name: string;
    timestamp: string;
    status: 'success' | 'failed' | 'pending';
}
