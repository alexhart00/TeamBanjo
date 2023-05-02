import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider, Route} from '@shopify/hydrogen';
import {Suspense} from 'react';
import Home from './root';
import NotFoundPage from './routes/Shared/FZFPage';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
          <Route path='/home' page={<Home/>}/>
          <Route path='*' page={<NotFoundPage/>}/>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);

