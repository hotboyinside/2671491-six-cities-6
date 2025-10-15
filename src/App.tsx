import { Main } from './pages/Main';
import { PlaceVariant } from './types/placeVariants';

type AppProps = {
  placeVariants: PlaceVariant[];
}

export default function App({ placeVariants }: AppProps) {
  return (
    <Main placeVariants={placeVariants} />
  );
}
