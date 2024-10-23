import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DAY } from '../utils/queries';

const Schedule = () => {
  const { loading, data } = useQuery(QUERY_SINGLE_DAY, {
    variables: { day: 'sunday' },
  });
  const queryResults = data?.schedule || [];
  let orderedResults = [...queryResults];
  orderedResults.sort((a, b) => {
    return a.startTime24 - b.startTime24;
  });
  console.log(orderedResults);

  return <div>Schedule page</div>;
};

export default Schedule;
