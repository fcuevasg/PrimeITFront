import { List } from 'antd';
import { Duty } from '../interfaces/Duty';
import ListButton, { ListButtonProps } from './ListButtons';

interface DutyListProps extends ListButtonProps {
  Duty: Duty[];
}

const DutyList: React.FC<DutyListProps> = (props: DutyListProps) => {
  const { Duty, onComplete, onDelete, onEdit } = props;

  const renderItem = (item: Duty) => {
    return (
      <div>
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.name}</a>}
            description={item.done ? 'Completed' : 'In progress'}
          />
          <ListButton
            onComplete={() => onComplete && onComplete(item)}
            onDelete={() => onDelete && onDelete(item)}
            onEdit={() => onEdit && onEdit(item)}
            selectedItem={item}
          ></ListButton>
        </List.Item>
      </div>
    );
  };

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={Duty?.filter((_duty) => !_duty.done && !_duty.deleted)}
        renderItem={renderItem}
      />
    </div>
  );
};
export default DutyList;
