import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const useGetAPI = (API) => {
  const [state, setState] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setState(response.data);
  }, []);

  return state;
};
