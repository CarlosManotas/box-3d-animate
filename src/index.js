import React, { lazy, Suspense } from 'react';
import LoadingComponent from './loading';
import CreateBoxSSR from './createBox';
const CreateBox = lazy(() => import("./createBox"));

function BoxMaker(props) {
  const { SSR } = props; 
  if (SSR) return <CreateBoxSSR {...props} />
  return (
    <Suspense fallback={<LoadingComponent {...props}/>}>
      <CreateBox {...props}/>
    </Suspense>
  )
};

export default BoxMaker;