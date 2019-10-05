import React from 'react';

export default ({ videos }) =>
    videos && videos.length
        ? videos.map(({ title, embed }) => (
              <>
                  <h2>{title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: embed }} />
              </>
          ))
        : null;
