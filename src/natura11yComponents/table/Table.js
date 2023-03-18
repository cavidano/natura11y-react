import React from 'react';

import {tableData} from './tableData';

import classNames from 'classnames';

const Table = ( props ) => {

  const {
    utilities = null
  } = props;

  const {
      headers, 
      rows 
  } = tableData;

  const tableHeaders = headers.map((header, index) => (
    <th key={index} scope='col'>
      {header}
    </th>
  ));

  const tableRows = rows.map((row, index) => {
   
    // convert object to array
    const rowData = Object.values(row);

    const tableCells = rowData.map((cell, index) => (
      <td key={index} data-header={headers[index]}>
        {cell}
      </td>
    ));

    return (
      <tr key={index}>
        {tableCells}
        <td data-header='Map' className='text-align-right'>
          <a href={`#${index}`}>Map View</a>
        </td>
      </tr>
    );
  });

	const componentClasses = classNames(
		'table',
		{
			[`${utilities}`] : utilities !== null
		}
	);

  return (
    <table className={componentClasses}>

      <caption>
        {tableData.caption}
      </caption>

      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>

      <tbody>
        {tableRows}
      </tbody>

    </table>
  );
};

export default Table;