import { useState, useEffect } from 'react';
import { Duty } from '../interfaces/Duty';
import { createToDo, fetchToDos } from '../services/ToDoService';

export const useToDo = () => {
  const [Duty, setDuty] = useState<Duty[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadToDos = async () => {
      try {
        const fetchedToDos = await fetchToDos();
        setDuty(fetchedToDos);
      } catch (err) {
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadToDos();
  }, []);

  const addToDo = async (duty: Duty) => {
    try {
      const newDuty = await createToDo(duty);
      setDuty((prevDuty) => [...prevDuty, newDuty]);
    } catch (err) {
      setError('Failed to add duty');
    }
  };

  const deleteToDo = async (id: string) => {
    try {
      await deleteToDo(id);
      setDuty((prevDuty) => prevDuty.filter((duty) => duty.id !== id));
    } catch (err) {
      setError('Failed to delete duty');
    }
  };

  const updateToDo = async (id: string, duty: Duty) => {
    console.log("updating with: ", id, duty)
    try {
      const updatedDuty = await updateToDo(id, duty);
      setDuty(
        (prevDuty: Duty[]) =>
          prevDuty.map((duty) =>
            duty.id === id ? updatedDuty : duty,
          ) as Duty[],
      );
    } catch (err) {
      setError('Failed to update duty');
    }
  };

  return {
    Duty,
    loading,
    error,
     addToDo,
    deleteToDo,
    updateToDo,

  };
};
