import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import { Grommet } from 'grommet';

const MFE = React.lazy(() => import('mfe-ex-1/Module'));

export function App() {
  return (
    <Grommet>
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<MFE/>} />
      </Routes>
    </React.Suspense>
    </Grommet>
  );
}

export default App;
