export interface Event {
  id: number;
  name: string;
  date: Date;
  local: string;
  description: string;
  creatorId: number;
  status: 'O' | 'C';
  createdAt: Date;
  updatedAt: Date;
}

export interface PublicEvent {
  id: number;
  name: string;
  date: Date;
  local: string;
  description: string;
  creatorId: number;
  status: 'O' | 'C';
}

export const isValidEvent = (event: any): event is Event => {
  return (
    typeof event.id === 'number' &&
    typeof event.name === 'string' &&
    event.date instanceof Date &&
    typeof event.local === 'string' &&
    typeof event.description === 'string' &&
    typeof event.creatorId === 'number' &&
    (event.status === 'O' || event.status === 'C') &&
    event.createdAt instanceof Date &&
    event.updatedAt instanceof Date
  );
};