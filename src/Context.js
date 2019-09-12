import { createContext } from 'react';

const Context = createContext({
  snippets: [],
  projects: [],
  project_id: null,
  error: null
});

export default Context;
