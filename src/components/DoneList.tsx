import { Avatar, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Duty } from '../interfaces/Duty';
import { ListButtonProps } from './ListButtons';

interface DoneListProps extends ListButtonProps {
  Duty: Duty[];
}

const DoneList: React.FC<DoneListProps> = (props: DoneListProps) => {
  const { Duty, onDelete } = props;

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
            onClick={() => onDelete && onDelete(item)}
          ></Button>
        </List.Item>
      )}
    />
  );
};

export default DoneList;
