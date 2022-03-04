// import React, { useState, useEffect } from 'react';
// import { DatePicker } from 'antd';
// import { DatePickerProps } from 'antd/es/date-picker';
// import moment from 'moment';
// // import DateRange from './DateRange';

// interface ProDate

// const ProDatePicker = Omit() ({
//   onChange,
//   value,
//   format = 'YYYY-MM-DD',
//   disabled,
//   placeholder = '请选择时间',
//   ...rest
// }) => {
//   return (
//     <DatePicker
//       showTime={
//         format.split(' ')[1]
//           ? {
//               format: format.split(' ')[1],
//             }
//           : false
//       }
//       allowClear={false}
//       style={{ width: '100%' }}
//       disabled={disabled}
//       value={value ? moment(value) : null}
//       placeholder={placeholder}
//       format={format}
//       onChange={(_, s) => onChange(moment(s).format(format))}
//       {...rest}
//     />
//   );
// };

// // ProDatePicker.DateRange = DateRange;

// export default ProDatePicker;
