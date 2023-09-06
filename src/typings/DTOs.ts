export interface ITodoDTO {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface ICreateTodoRequestDTO {
  userId: number;
  title: string;
  completed: boolean;
}

export interface ICreateTodoResponseDTO extends ITodoDTO {
  createdAt: string;
}
