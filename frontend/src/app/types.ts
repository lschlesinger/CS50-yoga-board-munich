export enum YogaType {
  HATHA, VINYASA, YIN, FLOW, BIKRAM
}

export interface YogaClass {
  id: string;
  name: string;
  title: string;
  location: string;
  description: string;
  date: Date;
  teacher: string;
  type: YogaType;
}

