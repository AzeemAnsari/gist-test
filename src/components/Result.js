import { Alert, Card } from 'antd';
import SingleCard from './SingleCard';

const Result = ({ data, username }) => {
  return (
    <div className="search-result-wrap">
      <Alert
        message={`${data.length} Gists found`}
        showIcon
        type="success"
        className="success-data"
      />
      <Card title={`Showing result for ${username}`} className="result-card-wrap">
        {data.map((item) => {
          return <SingleCard key={item.id} singleGist={item} />;
        })}
      </Card>
    </div>
  );
};

export default Result;
