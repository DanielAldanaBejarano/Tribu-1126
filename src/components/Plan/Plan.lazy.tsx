import React, { lazy, Suspense } from 'react';

const LazyPlan = lazy(() => import('./Plan'));

const Plan = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPlan {...props} />
  </Suspense>
);

export default Plan;
