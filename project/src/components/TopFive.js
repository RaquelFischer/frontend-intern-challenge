import React from 'react';

const TopFive = (props) => {
  const topFiveFilter = (arrayHits) => {
    return arrayHits.sort((a,b) =>  b.hits - a.hits).slice(0,5);
  }

  const sumHits = (arrayHits) => {
    let count = 0;
    arrayHits.forEach(hit => {
      count = count + hit.hits
    });
    return count;
  }

  return (
    <section className="container-top-5">
      <div className="top-5">
        <h1 className="title-h1-top-five">Top 5</h1>
        <ul className="list">{topFiveFilter(props.hits).map((hit) =>
          <li className="list-li">
            <div className="li-item">
              <p className="short-url">{hit.shortUrl}</p>
              <span className="n-hits">{hit.hits}</span>
            </div>
          </li>)}
        </ul>
      </div>
      <div className="container-hits">
        <div className="arrow-down" />
        <div className="hits">
          <h1 className="title-h1-top-five">Hits</h1>
          <div className="hits-div">
            <h1 className="title-h1-top-five">{props.hits ? sumHits(props.hits) : null}</h1>
          </div>
          <p>Cliques em links</p>
        </div>
      </div>
    </section>
  )
}

export default TopFive;
