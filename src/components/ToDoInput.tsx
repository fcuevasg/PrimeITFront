import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface ToDoInputProps {
  onAdd: (text: string) => void;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ onAdd }) => {
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
    <div>
      <Input value={text} onChange={handleInputChange} />
      <Button type="primary" onClick={handleAddClick}>
        Add
      </Button>
    </div>
  );
};

export default ToDoInput;