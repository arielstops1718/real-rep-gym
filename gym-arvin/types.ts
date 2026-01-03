export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DaySchedule {
  day: string;
  hours: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}