import axios from 'axios';
import { Duty } from '../interfaces/Duty';


const API_URL = 'http://localhost:3000/api/duties';

export const createToDo = async (duty: Duty): Promise<Duty> => {
  const response = await axios.post<Duty>(API_URL, { ...duty });
  return response.data;
};

export const fetchToDos = async (): Promise<Duty[]> => {
  const response = await axios.get<Duty[]>(API_URL);
  return response.data;
};

export const deleteToDo = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateToDo = async (id: string, duty: Duty): Promise<Duty> => {
  const response = await axios.put<Duty>(`${API_URL}/${id}`, { ...duty });
  return response.data;
};
