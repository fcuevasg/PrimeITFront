import React, { createContext, useContext, ReactNode } from 'react';
import { useToDo } from '../hooks/useToDo';
import { Duty } from '../interfaces/Duty';

interface ToDoContextType {
  duty: Duty[];
  loading: boolean;
  error: string | null;
  addToDo: (duty: Duty) => void;
  deleteToDo: (id: string) => void;
  updateToDo: (id: string, duty: Duty) => void;
}

const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

export const ToDoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { Duty, loading, error, addToDo, deleteToDo, updateToDo } = useToDo();

  return (
    <ToDoContext.Provider
      value={{ duty: Duty, loading, error, addToDo, deleteToDo, updateToDo }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = (): ToDoContextType => {
  const context = useContext(ToDoContext);
  if (context === undefined) {
    throw new Error('useToDoContext must be used within a ToDoProvider');
  }
  return context;
};
