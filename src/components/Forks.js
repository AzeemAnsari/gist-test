import { Avatar, Image, List, Card, Typography } from 'antd';
import { BiGitRepoForked } from 'react-icons/bi';

export const Forks = ({ forks }) => {
  const forksList = forks.forks || [];
  // console.log(forksList);
  return (
    <div className="forks-list">
      {forksList && forksList.length ? (
        <div>
          <h3>
            Forks <BiGitRepoForked />
          </h3>{' '}
          <List
            itemLayout="horizontal"
            header={null}
            footer={null}
            bordered
            dataSource={forksList}
            renderItem={(item, i) => (
              <List.Item key={i}>
                <List.Item.Meta
                  avatar={<Avatar src={item.user.avatar_url} />}
                  title={item.user.name}
                  description={item.user.bio}
                />
              </List.Item>
            )}
          />
        </div>
      ) : (
        <Typography.Text type="danger">No Forks Yet!</Typography.Text>
      )}
    </div>
  );
};
