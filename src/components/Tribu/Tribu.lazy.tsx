import React, { lazy, Suspense } from 'react';

const LazyTribu = lazy(() => import('./Tribu'));

const Tribu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTribu {...props} />
  </Suspense>
);

export default Tribu;
