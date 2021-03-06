import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ROOT_URL } from '../../../config';

import HomeImg from '../../images/headImage/Home.jpg';

export default class impressum extends Component {
  render() {
    return (
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>FF-Kappel | Impressum</title>
          <link rel="canonical" href={ROOT_URL + '/impressum'} />
        </Helmet>

        <img className="head_image coantainer-big" src={HomeImg} />

        <div className="bg-primary-dark ">
          <div className="container-big nopt nopb">
            <h3 className="headTitle regular container-big">Freiwillige Feuerwehr Kappel am Krappfeld</h3>
          </div>
        </div>

        <div className="container-big">
        <h2 className="container-big">Impressum</h2>

        <div className="container-big">
          <h6>Verantwortlich für den Inhalt</h6>
          <p className="mpb">
            Es wird keinerlei Haftung für den Inhalt, insbesondere für die Richtigkeit, Vollständigkeit und Aktualität der Homepage und der Website übernommen. Irrtümer werden vorbehalten. Dieser Haftungsausschluss gilt auch für verlinkte Seiten.
          </p>

          <h6>Freiwillige Feuerwehr Kappel</h6>
          <p className="mpb">
            Silberbachstraße 2 <br />
            9321 Kappel am Krappfeld <br /><br />
            0664 3219337 <br />
            Thomas.koefer@aon.at<br />
            www.ff-kappel.at <br />
          </p>

          <h6>Konzept, Layout und Umsetzung</h6>
          <p className="mpb">
            design in time werbeagentur e.U.
          </p>

          <h6>Bildbearbeitung</h6>
          <p className="mpb">
            design in time werbeagentur e.U.
          </p>

        </div>




        </div>
      </div>
    );
  }
}
