import { useContext } from 'react';
import Router from './router';
import { ErrorContext } from './contexts/error-context';
import ErrorAlert from './components/error-alert';

const App = () => {
  const { error, setError } = useContext(ErrorContext);

  return (
    <>
      <ErrorAlert error={error} setError={setError} />
      <Router />
    </>
  );
};

export default App;
