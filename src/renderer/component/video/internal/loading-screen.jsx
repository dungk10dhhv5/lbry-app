// @flow
import React from 'react';
import Spinner from 'component/common/spinner';

type Props = {
  spinner: boolean,
  status: string,
};

const LoadingScreen = (props: Props) => {
  const { status, spinner } = props;
  return (
    <div className="video__loading-screen">
      {spinner && <Spinner />}

      <span className="video__loading-text">{status}</span>
    </div>
  );
};

export default LoadingScreen;
