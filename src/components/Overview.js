import { useEffect } from 'react';

const Overview = () => {
  useEffect(() => {
    getAllTabs();
    getAllWindows();
  }, []);

  const getAllTabs = () => {
    chrome.tabs.query({}, (data) => console.log(data));
  };

  const getAllWindows = () => {
    console.log('getAllWindows()');
    chrome.windows.getAll({}, (data) => console.log(data));
  };

  return <div>Overview content</div>;
};

export default Overview;
