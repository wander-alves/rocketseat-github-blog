import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Home } from './pages/Home';
import { PostDetails } from './components/PostDetails';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}
