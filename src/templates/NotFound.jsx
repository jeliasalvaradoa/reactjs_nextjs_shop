import React from 'react';
import Link from 'next/link';
import '@styles/NotFound.css';

const NotFound = () => {
   return (
    <div className="cloud-general">
  <div id="clouds">
    <div className="cloud x1" />
    <div className="cloud x1_5" />
    <div className="cloud x2" />
    <div className="cloud x3" />
    <div className="cloud x4" />
    <div className="cloud x5" />
  </div>
  <div className="c">
    <div className="_404">404</div>
    <hr />
    <div className="_1">LA PAGINA</div>
    <div className="_2">NO FUE ENCONTRADA</div>
    <Link className="btn" href="/">REGRESAR</Link>
  </div>
</div>

   );


};

export default NotFound;