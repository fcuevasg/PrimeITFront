import React from 'react';
import { Tabs, TabsProps } from 'antd';
import DutyList from '../components/DutyList';
import ToDoInput from '../components/ToDoInput';
import DoneList from '../components/DoneList';
import { useToDo } from '../hooks/useToDo';

const homePage: React.FC = () => {
  const { addToDo } = useToDo();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'In progress',
      children: <DutyList />,
    },
    {
      key: '2',
      label: 'Done',
      children: <DoneList />,
    },
  ];

  return (
    <div>
      <ToDoInput
        onAdd={(text) => {
          addToDo({ name: text, done: false, deleted: false });
        }}
      />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default homePage;
