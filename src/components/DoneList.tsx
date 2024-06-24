import { Avatar, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { Duty } from '../interfaces/Duty';

interface DutyListProps {
  DataState?: Duty[];
  setDataState?: React.Dispatch<React.SetStateAction<Duty[]>>;
}

const handleDelete = (
  index: number,
  setState: React.Dispatch<React.SetStateAction<Duty[]>>,
) => {
  setState((prevState) => prevState.filter((_, i) => i !== index));
};

const handleCompleteTask = (index: number) => {
  // TODO: set task to completed
  console.log(index);
};

const handleEdit = (
  contents: string,
  index: number,
  setState: React.Dispatch<React.SetStateAction<Duty[]>>,
  closeModal: () => void,
) => {
  if (index === -1) return; //check if not selected
  setState((prevState) => {
    const updatedState = [...prevState];
    updatedState[index].name = contents;
    return updatedState;
  });
  closeModal();
};

const DoneList: React.FC<DutyListProps> = ({ DataState, setDataState }) => {
  useEffect(() => {
    // Load data here
    console.log('Data loaded');
  }, []);

  //TODO: Add error handling for when DataState is undefined
  return (
    <List
      itemLayout="horizontal"
      dataSource={DataState}
      renderItem={(item: Duty, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.id}
          />

          <Button
            danger
            icon={<DeleteOutlined />}
            iconPosition="end"
            onClick={() => handleDelete(index, setDataState!)}
          ></Button>
        </List.Item>
      )}
    />
  );
};

export default DoneList;
