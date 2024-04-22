/* eslint-disable prettier/prettier */
export interface Question {
  questionId: number;
  questionText: string;
  category?: string; // opcjonalne, w zależności od potrzeb
  answer?: string; // Używane do przechowywania odpowiedzi użytkownika na froncie
}

export interface Response {
  responseId?: number; // Opcjonalne, przydatne jeśli trzeba zidentyfikować odpowiedzi
  questionId: number;
  userId?: number; // Jeśli użytkownicy są autoryzowani, może być potrzebne
  answer?: string;
  responseDate?: Date; // Opcjonalne, może być ustawiane na backendzie
}
