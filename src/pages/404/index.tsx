import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function Page404() {
  const navigate = useNavigate();

  const goHome = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/');
  }, [navigate]);

  return (
    <div className="page-404">
      <h1>404 - Page Not Found</h1>
      <button
        type="button"
        onClick={goHome}
        className="page-404__home-button"
      >
        Go to main page
      </button>
    </div>
  );
}
