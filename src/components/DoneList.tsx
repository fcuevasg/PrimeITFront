import { Avatar, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Duty } from '../interfaces/Duty';
import { ListButtonProps } from './ListButtons';

interface DoneListProps extends ListButtonProps {
  Duty: Duty[];
  loading?: boolean;
}

const DoneList: React.FC<DoneListProps> = (props: DoneListProps) => {
  const { Duty, onDelete } = props;

  return (
    <List
      loading={props.loading}
      itemLayout="horizontal"
      dataSource={Duty.filter((duty) => duty.done && !duty.deleted)}
      renderItem={(item: Duty) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.name}`}
              />
            }
            title={item.name}
            description={item.done ? 'Done' : 'Pending'}
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
