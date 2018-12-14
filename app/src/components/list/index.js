import React from 'react';
import Item from '../item';

export default ({result}) => (
  <div className="results">
    <h2>{result.total ? `Showing ${result.total} jobs` : 'Nothing found'}</h2>
    {result && result.total && result.data.map((a, i) => (
      <Item
        key={a.id}
        title={a.title}
        enterprise={a.company}
        type={a.type}
        location={a.location}
        since={a.created_at}
        link={a.url}
      />
    ))}
  </div>
);
