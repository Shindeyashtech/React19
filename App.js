import React from 'react';

const MyComponent = ({ data }) => {
  const processedData = processData(data);

  return <div>{processedData}</div>;
};

// Example function to process data
const processData = (data) => {
  return Processed: ${data};
};

const App = () => {
  return <MyComponent data="Some data" />;
};

export default App;