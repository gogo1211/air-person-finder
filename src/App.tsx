// layouts
import { MainLayout } from 'layout/MainLayout';

// Pages
import PersonFinder from 'pages/person-finder';

export const App = () => {
  return (
    <MainLayout>
      <PersonFinder />
    </MainLayout>
  );
};
