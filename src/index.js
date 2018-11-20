import React, { lazy, Suspense } from 'react';
import LoadingComponent from './loading';

const CreateBox = lazy(() => import("./createBox"));

function BoxMaker(props) {
  return (
    <Suspense fallback={<LoadingComponent {...props}/>}>
      <CreateBox {...props}/>
    </Suspense>
  )
};

export default BoxMaker;