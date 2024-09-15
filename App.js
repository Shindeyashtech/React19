import React, { useMemo } from 'react';

const MyComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);

  return <div>{processedData}</div>;
});

// Example function to process data
const processData = (data) => {
  return Processed: ${data};
};

const App = () => {
  return <MyComponent data="Some data" />;
};

export default    App;   
 
 
