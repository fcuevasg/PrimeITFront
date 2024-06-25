import React, { useEffect, useState } from 'react';
import { Flex, Modal, notification, Tabs, TabsProps } from 'antd';
import DutyList from '../components/DutyList';
import ToDoInput from '../components/ToDoInput';
import DoneList from '../components/DoneList';
import { useToDo } from '../hooks/useToDo';
import { Duty } from '../interfaces/Duty';
import Title from 'antd/es/typography/Title';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const homePage: React.FC = () => {
  const {
    addToDo,
    Duty: duties,
    deleteToDo,
    updateToDo,
    loading,
    error,
  } = useToDo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDuty, setSelectedDuty] = useState<Duty | undefined>(undefined);

  // Functions for handling the actions
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
    if (item && item.id) deleteToDo(item.id);
  };
  const onComplete = (item: Duty | undefined) => {
    if (item && item.id) updateToDo(item.id, { ...item, done: true });
  };

  //Notifications

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Error occurred while trying to perform the action',
      description: error,
    });
  };

  useEffect(() => {
    if (error) {
      openNotificationWithIcon('error');
    }
  }, [error]);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'In progress',
      children: (
        <DutyList
          loading={loading}
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
        <DoneList
          selectedItem={selectedDuty}
          Duty={duties}
          showDelete
          onDelete={onDelete}
        />
      ),
    },
  ];

  return (
    <Flex vertical={true} gap="Large" >
      {contextHolder}
      <Title level={3} >ToDo's app by Javi</Title>
      <ToDoInput
        onAdd={(text) => {
          addToDo({ name: text, done: false, deleted: false });
        }}
      />
      <Tabs defaultActiveKey="1" items={items} />

      <Modal
        title="Basic Modal"
        onClose={() => {
          closeModal();
        }}
        closable={true}
        onCancel={() => {
          closeModal();
        }}
        open={isModalOpen}
        footer={[]}
      >
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
          loading={loading}
        ></ToDoInput>
      </Modal>
    </Flex>
  );
};

export default homePage;
