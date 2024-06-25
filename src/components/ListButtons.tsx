import React from 'react';
import { Duty } from '../interfaces/Duty';
import { Button, Flex } from 'antd';
import { CheckOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export interface ListButtonProps {
  selectedItem: Duty | undefined;
  showEdit?: boolean;
  showDelete?: boolean;
  showComplete?: boolean;

  onEdit?: (DutyToEdit: Duty | undefined) => void;
  onDelete?: (DutyToEdit: Duty | undefined) => void;
  onComplete?: (DutyToEdit: Duty | undefined) => void;
}

const ListButton: React.FC<ListButtonProps> = (props: ListButtonProps) => {
  const { showEdit = true, showDelete = true, showComplete = true } = props;
  return (
    <Flex gap="small" >
      {showComplete ? (
        <Button
          type="primary"
          icon={<CheckOutlined />}
          iconPosition="end"
          onClick={() =>
            props.onComplete && props.onComplete(props.selectedItem)
          }
        ></Button>
      ) : (
        <></>
      )}
      {showEdit ? (
        <Button
          icon={<EditOutlined />}
          iconPosition="end"
          onClick={() => props.onEdit && props.onEdit(props.selectedItem)}
        ></Button>
      ) : (
        <></>
      )}
      {showDelete ? (
        <Button
          danger
          icon={<DeleteOutlined />}
          iconPosition="end"
          onClick={() => props.onDelete && props.onDelete(props.selectedItem)}
        ></Button>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default ListButton;
