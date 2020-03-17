import React from 'react';
import Header from '../Components/Header.js';
import '../style/Main.css';
function Main() {
  return (
    <div className="header">
      <Header/>
      <div className="container">
        <div className="text-header">
          <h1>
            the easy way to learn and develop.
          </h1>
          <p>
            Terinspirasi dari GitHub, StackOverFlow dan W3School. Dari host kode
            yang Open Source dan keperluan komersil sampai belajar koding dan berdiskusi secara langsung
            , semua bisa dilakukan disini di <strong>Codes Of Warriors</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
