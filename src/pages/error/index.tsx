import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useError } from '../../components/error/hooks/use-error';

export function Error() {
  const navigate = useNavigate();
  const { message } = useError();

  const goHome = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/');
  }, [navigate]);

  return (
    <div className="error-page">
      <h1>Something went wrong</h1>
      {message && <p className="error-page__message">{message}</p>}
      <button
        type="button"
        onClick={goHome}
        className="error-page__home-button"
      >
        Go to main page
      </button>
    </div>
  );
}
