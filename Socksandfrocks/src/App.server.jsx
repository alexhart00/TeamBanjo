import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider, Route} from '@shopify/hydrogen';
import {Suspense} from 'react';
import CuratedPage from './routes/Curated/CuratedPage';
import ManualPage from './routes/Manual/ManualPage';
import RandomPage from './routes/Random/RandomPage';
import Home from './routes/index.server';

function App() {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <Router>
          <FileRoutes />
          <Route path='/home' page={<Home/>}/>
          <Route path='/curated' page={<CuratedPage/>}/>
          <Route path='/manual' page={<ManualPage/>}/>
          <Route path='/random' page={<RandomPage/>}/>
          <Route path='/randompart1' page={<RandomPagePart1/>}/>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
