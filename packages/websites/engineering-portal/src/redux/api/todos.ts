import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({
    // omitted
  }),
});

export default todosApi;
