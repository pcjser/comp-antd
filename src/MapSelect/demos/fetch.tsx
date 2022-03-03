import React, { useState } from 'react';
import { MapSelect } from 'comp-antd';

function MapSelectDemo() {
  // const [loading, setLoading] = useState<boolean>(false);

  // const getCode = async () => {
  //   setLoading(true);
  //   try {
  //     return await new Promise((resolve) =>
  //       setTimeout(() => {
  //         resolve(123);
  //       }, 1000),
  //     );
  //   } catch (err) {
  //     throw new Error('failed');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <MapSelect
      // data={[
      //   {
      //     label: 'demo1',
      //     value: 'demo1',
      //   },
      //   {
      //     label: 'demo2',
      //     value: 'demo2',
      //   },
      // ]}
      // onSearch={onSearch}
      style={{ width: 200 }}
      unique="法律法规"
      allowClear
      mode="multiple"
      onChange={console.log}
      fetch={async () => {
        const data: {
          result: { dicName: string }[];
        } = await window
          .fetch('http://172.30.1.173:32009/enforcement/dictionaryData/queryDataList?typeId=1000')
          .then((response) => response.json());
        // console.log(data);
        return data.result.map(({ dicName }) => ({
          label: dicName,
          value: dicName,
        }));
      }}
    />
  );
}

export default MapSelectDemo;
