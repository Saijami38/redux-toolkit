import React, { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';

export default function SortableComponent() {
  const sortableContainerRef1 = useRef(null);
  const sortableContainerRef2 = useRef(null);

  useEffect(() => {
    if (sortableContainerRef1.current && sortableContainerRef2.current) {
      new Sortable(sortableContainerRef1.current, {
        group: 'shared', // set both lists to the same group
        animation: 150,
      });

      new Sortable(sortableContainerRef2.current, {
        group: 'shared',
        animation: 150,
      });
    }
  }, []);

  const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

  return (
    <div>
      <h2>Sortable Component</h2>
      <div ref={sortableContainerRef1} className="sortable-container">
        {items.map((item, index) => (
          <div key={index} className="sortable-item">
            {item}
          </div>
        ))}
      </div>
      <div ref={sortableContainerRef2} className="sortable-container">
        {/* You can use similar mapping logic here for the second list */}
      </div>
    </div>
  );
}
