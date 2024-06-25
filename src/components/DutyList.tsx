import { Button, List, Modal } from 'antd';
import { CheckOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Duty } from '../interfaces/Duty';
import ToDoInput from './ToDoInput';
import { useToDo } from '../hooks/useToDo';

const handleEdit = (
  contents: string,
  index: number,
  updateToDo: any,
  Duty: Duty[],
  closeModal: any,
) => {
  if (index === -1) return;
  updateToDo(Duty[index].id, { ...Duty[index], name: contents });
  closeModal();
};

const DutyList: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Duty, updateToDo } = useToDo();

  useEffect(() => {
    console.log("Test dependencia 2")
  }, [Duty]);



  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = (index: number) => {
    if (index === -1) return;
    const duty = Duty[index];
    if (duty.id !== undefined) {
      updateToDo(duty.id, { ...duty, deleted: true });
    }
  };

  const handleCompleteClick = (index: number) => {
    if (index === -1) return;
    const duty = Duty[index];
    if (duty.id !== undefined) {
      updateToDo(duty.id, { ...duty, done: true });
    }
  };

  const handleEditClick = (index: number) => {
    setSelectedIndex(index);
    showModal();
  };

  const renderItem = (item: Duty, index: number) => (
    <List.Item>
      <List.Item.Meta
        title={<a href="https://ant.design">{item.name}</a>}
        description={item.done ? 'Completed' : 'In progress'}
      />

      <Button
        type="primary"
        icon={<CheckOutlined />}
        iconPosition="end"
        onClick={() => handleCompleteClick(index)}
      ></Button>

      <Button
        icon={<EditOutlined />}
        iconPosition="end"
        onClick={() => handleEditClick(index)}
      ></Button>
      <Button
        danger
        icon={<DeleteOutlined />}
        iconPosition="end"
        onClick={() => handleDeleteClick(index)}
      ></Button>
    </List.Item>
  );

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={Duty.filter((_duty) => !_duty.done && !_duty.deleted)}
        renderItem={renderItem}
      />
      <Modal title="Basic Modal" open={isModalOpen} footer={[]}>
        <ToDoInput
          onAdd={(contents) =>
            handleEdit(contents, selectedIndex, updateToDo, Duty, closeModal)
          }
        ></ToDoInput>
      </Modal>
    </div>
  );
};

export default DutyList;
