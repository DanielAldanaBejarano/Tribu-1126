import React, { lazy, Suspense } from 'react';

const LazyRitual = lazy(() => import('./Ritual'));

const Ritual = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRitual {...props} />
  </Suspense>
);

export default Ritual;
