import { useEffect, useState } from 'react';
import WindowList from './WindowList';

const Overview = () => {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    getAllTabs();
    getAllWindows();
  }, []);

  const getAllTabs = () => {
    chrome.tabs.query({}, (data) => console.log(data));
  };

  const getAllWindows = () => {
    chrome.windows.getAll({}, (data) => setWindows(data));
  };

  return (
    <div>
      Overview content
      <WindowList windows={windows} />
    </div>
  );
};

export default Overview;
