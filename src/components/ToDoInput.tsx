import React, { useState } from 'react';
import { Input, Button, Flex } from 'antd';

interface ToDoInputProps {
  onAdd: (text: string) => void;
  loading?: boolean;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ onAdd, loading }) => {
  const [text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <Flex gap="middle">
      <Input
        value={text}
        onChange={handleInputChange}
        placeholder="Insert a new ToDo"
      />
      <Button type="primary" onClick={handleAddClick} loading={loading}>
        Add
      </Button>
    </Flex>
  );
};

export default ToDoInput;
