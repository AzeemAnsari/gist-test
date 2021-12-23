import { useState } from 'react';
import { Card, Badge, Button, Tag } from 'antd';
import FileList from './FileList';
import axios from 'axios';
import { Forks } from './Forks';

const SingleCard = ({ singleGist }) => {
  const [forksData, setForksData] = useState([]);
  const [showForks, setShowForks] = useState(false);
  const [forksLoading, setForksLoading] = useState(false);
  let filesCount = Object.keys(singleGist.files).length;
  const files = singleGist.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }
  const getForks = async (id) => {
    setForksLoading(true);
    if (id !== '') {
      await axios
        .get(`https://api.github.com/gists/${id}`)
        .then((res) => {
          console.log(res.data);
          setForksData(res.data);
          setShowForks(true);
          setForksLoading(false);
        })
        .catch((e) => {
          alert(e.message);
          setShowForks(false);
          setForksLoading(false);
          return false;
        });
    }
  };
  return (
    <Card
      type="inner"
      title={singleGist.description || 'No Description Available'}
      extra={
        !showForks ? (
          <Button type="primary" onClick={() => getForks(singleGist.id)}>
            {forksLoading ? 'Loading...' : 'Show Forks'}
          </Button>
        ) : (
          <Button type="dashed" onClick={() => setShowForks(false)}>
            Hide Forks
          </Button>
        )
      }
      style={{ marginBottom: '2rem' }}
    >
      <h4>
        <Badge style={{ backgroundColor: '#2db7f5' }} count={filesCount} />{' '}
        {`File${filesCount > 1 ? 's' : ''}`}
      </h4>
      <div className="file-type">
        {fileArr.map((language, i) => {
          // console.log(language);
          return language ? (
            <Tag color="orange" key={i}>
              {language}
            </Tag>
          ) : null;
        })}
      </div>
      <FileList files={files} />
      {showForks && forksData !== [] ? <Forks forks={forksData} /> : null}
    </Card>
  );
};

export default SingleCard;
