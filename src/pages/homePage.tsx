import React, { useState } from 'react';
import { Modal, Tabs, TabsProps } from 'antd';
import DutyList from '../components/DutyList';
import ToDoInput from '../components/ToDoInput';
import DoneList from '../components/DoneList';
import { useToDo } from '../hooks/useToDo';
import { Duty } from '../interfaces/Duty';

const homePage: React.FC = () => {
  const { addToDo, Duty: duties, deleteToDo, updateToDo } = useToDo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDuty, setSelectedDuty] = useState<Duty | undefined>(undefined);

  const onEdit = (item: Duty | undefined) => {
    setSelectedDuty(item);
    showModal();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDelete = (item: Duty | undefined) => {
    console.log('deleting', item);
    if (item && item.id) deleteToDo(item.id);
  };
  const onComplete = (item: Duty | undefined) => {
    if (item && item.id) updateToDo(item.id, { ...item, done: true });
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'In progress',
      children: (
        <DutyList
          Duty={duties}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          selectedItem={selectedDuty}
          showComplete
          showDelete
          showEdit
        />
      ),
    },
    {
      key: '2',
      label: 'Done',
      children: (
        <DoneList selectedItem={selectedDuty} Duty={duties} showDelete onDelete={onDelete} />
      ),
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

      <Modal title="Basic Modal" open={isModalOpen} footer={[]}>
        <ToDoInput
          onAdd={(contents) => {
            if (selectedDuty && selectedDuty.id) {
              updateToDo(selectedDuty.id, {
                name: contents,
                done: false,
                deleted: false,
              });
              closeModal();
            }
          }}
        ></ToDoInput>
      </Modal>
    </div>
  );
};

export default homePage;
