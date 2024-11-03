import React from 'react';

function Section({ title, children }) {
  return (
    <section style={{ margin: '2rem 0' }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
