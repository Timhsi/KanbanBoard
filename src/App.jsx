import Header from './components/Header';
import { useState } from 'react';
import Table from './components/Table';
import useApiData from './hooks/useApiData';

function App() {
  const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment ';

  const { data, loading, error } = useApiData(apiUrl);

  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || "status");
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || "priority")

  const changeGroupBy = (value) => {
    setGroupBy(value);
    localStorage.setItem('groupBy', value);
  }

  const changeSortBy = (value) => {
    setSortBy(value);
    localStorage.setItem('sortBy', value);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='App'>
      <Header groupBy={groupBy} changeGroupBy={changeGroupBy} sortBy={sortBy} changeSortBy={changeSortBy} />

      <Table cards={data.tickets} users={data.users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
