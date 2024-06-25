import { Avatar, Flex, List } from 'antd';
import { Duty } from '../interfaces/Duty';
import ListButton, { ListButtonProps } from './ListButtons';

interface DutyListProps extends ListButtonProps {
  Duty: Duty[];
  loading: boolean;
}

const DutyList: React.FC<DutyListProps> = (props: DutyListProps) => {
  const { Duty, onComplete, onDelete, onEdit, loading } = props;

  const renderItem = (item: Duty) => {
    return (
      <Flex vertical={true}>
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.name}`}
              />
            }
            title={item.name}
            description={item.done ? 'Completed' : 'In progress'}
          />
          <ListButton
            onComplete={() => onComplete && onComplete(item)}
            onDelete={() => onDelete && onDelete(item)}
            onEdit={() => onEdit && onEdit(item)}
            selectedItem={item}
          ></ListButton>
        </List.Item>
      </Flex>
    );
  };

  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={Duty?.filter((_duty) => !_duty.done && !_duty.deleted)}
      renderItem={renderItem}
    />
  );
};
export default DutyList;
