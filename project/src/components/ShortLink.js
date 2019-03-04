import React, { Fragment } from 'react';
import Hits from '../assets/urls';

class ShortLink extends React.Component {
  state = {
    short: true,
    url: '',
    hits: null,
  };

  componentDidMount() {
    this.setState({ hits: Hits });
  }

  handleShortLink = (arrayHits) => {
    if (this.state.url === '') {
      alert("Necessário url para encurtar");
    } else {
      const hit = arrayHits.find(
        (hit) => hit.url.match(this.state.url) ? true : false);
      if(hit===undefined){
        alert("Não foi possível encurtar, por favor coloque um link valido!");
        return
      }
      this.setState({ short: !this.state.short, url: hit.shortUrl });
    }
  }

  copyText = () => {
    let copyText = document.getElementById("input");
    copyText.select();
    document.execCommand("copy");
  }

  clear = () => {
    this.setState({ short: !this.state.short, url: '' });
  }

  render() {
    return (
      <section className="link">
        <div className="center-link">
          <div className="text">
            <h1 className="tite-h1">Encurte seus links</h1>
            <p className="p-link">Links são longos. Encurte os links que você deseja compartilhar,
                e acompanhe enquanto viajam através da internet.</p>
          </div>
          <div className="input-div">
            <input
              placeholder="Cole o seu link aqui"
              value={this.state.url}
              type="text"
              id="input"
              className={this.state.short ? "input" : "input-short-link"}
              spellcheck="false"
              onChange={(event) => this.setState({ url: event.target.value })}
            />
            {
              this.state.short ?
                <button
                  className="button-link"
                  onClick={() => this.handleShortLink(this.state.hits)}
                >
                  ENCURTAR
                </button>
                :
                <Fragment>
                  <span id="clear" onClick={() => this.clear()}>x</span>
                  <button
                    className="button-link"
                    onClick={() => this.copyText()}
                  >
                    COPIAR
                  </button>
                </Fragment>
            }
          </div>
        </div>
      </section>
    )
  }
}


export default ShortLink;
