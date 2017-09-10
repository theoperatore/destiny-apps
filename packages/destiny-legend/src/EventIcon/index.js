import React from 'react';
import cn from 'classnames';

import './index.css';

export default function EventIcon({ className }) {
  const css = cn('EventIcon', className);
  return (
    <div className={css} />
  );
}
