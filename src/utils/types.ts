export type TaskProps = {
  id: number;
  text: string;
  day: string;
  reminder: boolean
}

export type Order = 'text' | 'day' | 'reminder';