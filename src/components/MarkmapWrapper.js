import React, { useEffect, useRef } from 'react';
import { Markmap } from 'markmap-view';
import { Transformer } from 'markmap-lib';

export default function MarkmapWrapper({ content, height = 400 }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!svgRef.current || !content) return;
    const transformer = new Transformer();
    const { root } = transformer.transform(content);
    Markmap.create(svgRef.current, null, root);
  }, [content]);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        overflow: 'auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    >
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
