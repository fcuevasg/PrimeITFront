import React from 'react';
import { Tabs, TabsProps } from 'antd';
import DutyList from '../components/DutyList';
import ToDoInput from '../components/ToDoInput';

const homePage: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'In progress',
      children: <DutyList />,
    },
    // {
    //   key: '2',
    //   label: 'Done',
    //   children: <DoneList />,
    // },
  ];

  return (
    <div>
      <ToDoInput
        onAdd={(data) => {
          console.log('add', data);
        }}
      />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default homePage;
