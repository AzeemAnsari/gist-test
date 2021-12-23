import { List } from 'antd';

const FIleList = ({ files }) => {
  return (
    <>
      <List
        className="file-list"
        size="small"
        header={null}
        footer={null}
        bordered
        dataSource={Object.values(files).map((file) => file)}
        renderItem={(item, i) => (
          <List.Item key={i}>
            <span>{item.filename}</span>
            <div>
              <a href={item.raw_url} target="_blank">
                View
              </a>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default FIleList;
