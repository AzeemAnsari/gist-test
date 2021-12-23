import { useState } from 'react';
import { Input, Typography, Alert } from 'antd';
import axios from 'axios';
import Blank from './Blank';
import Result from './Result';

const { Search } = Input;
const { Text } = Typography;

const SearchInput = () => {
  const [username, setUsername] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const onSearch = (value) => {
    setError(false);
    setData([]);
    if (!username) {
      setInputError(true);
      return false;
    } else {
      setLoading(true);
      axios
        .get(`https://api.github.com/users/${value}/gists`, {
          headers: {
            Authorization: 'token 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',
          },
        })
        .then((res) => {
          //   console.log(res.data);
          if (!res.data.length || res.message === 'Not Found') {
            setError(true);
            setLoading(false);
          } else {
            setError(false);
            // setUsername('');
            setData(res.data);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
          setError(true);
          setLoading(false);
          return false;
        });
    }
  };
  return (
    <div className="search-wrap">
      <div className="search-input">
        <Search
          value={username}
          size="large"
          placeholder="Enter username"
          onSearch={onSearch}
          enterButton="Search"
          allowClear
          onChange={(e) => {
            setError(false);
            setUsername(e.target.value);
            setInputError(false);
          }}
        />
        {inputError ? <Text type="danger">Please enter username!</Text> : null}
      </div>
      {error && username ? (
        <Alert message="No data found!" className="no-data" type="error" />
      ) : data.length ? (
        <Result data={data} username={username} />
      ) : (
        <Blank loading={loading} />
      )}
    </div>
  );
};

export default SearchInput;
