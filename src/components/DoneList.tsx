import { Avatar, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Duty } from '../interfaces/Duty';
import { useToDo } from '../hooks/useToDo';

const DoneList: React.FC = () => {
  const handleDeleteClick = (index: number) => {
    if (index === -1) return;
    const dutyId = Duty[index]?.id;
    if (dutyId) {
      updateToDo(dutyId, { ...Duty[index], deleted: true });
    }
  };

  const { Duty, updateToDo } = useToDo();

  return (
    <List
      itemLayout="horizontal"
      dataSource={Duty.filter((duty) => duty.done && !duty.deleted)}
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
            onClick={() => handleDeleteClick(index)}
          ></Button>
        </List.Item>
      )}
    />
  );
};

export default DoneList;
