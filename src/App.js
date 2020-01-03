import React, { Component, lazy, Suspense } from 'react';


const LazyComponent = lazy(() => import('./components/LazyComponent'))

class App extends Component {
  render() {
    return (

      <div>
        <div>another component</div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      </div >


    );
  }
}

export default App;
