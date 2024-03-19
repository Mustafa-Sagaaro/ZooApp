
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/News.css";

const ZooNewsComponent = () => {
  // Definieren Sie die Iframe-Elemente als Carousel-Elemente
  const items = [
    <div className="item" key="1">
      <img src="https://zoo-live.rokka.io/home_landscape_lg_1x/b1b42724d18f8e2c53c5df03cb2fa8336d6922bd/m-nz8-9064-threskiornis-bernieri.jpg?h=820d9804&itok=AQviiBqh" alt="" />
      <p className="iframe-text">Zwei neue im Regenwald</p>
      <p>22.02.2024  </p>
    </div>,
    <div className="item" key="2">
      <img src="https://zoo-live.rokka.io/home_landscape_lg_1x/001b1a7e859e083d20b7fcf2a1a25facfae8adc9/l-ef-mg-53957bfgsk.jpg?h=1a3b480c&itok=t9ikr6ux" alt="" />
      <p className="iframe-text">Jeder Waldrapp zählt</p>
      <p>12.02.2024</p>
    </div>,
    <div className="item" key="3">
      <img src="https://zoo-live.rokka.io/home_landscape_lg_1x/c07435e63f9e22ac47d386e8fbe788eefbbcbd32/der-unsichtbare-zoo-romuald-karmakar-2024-c-pantera-film-gmb.jpg?h=56d0ca2e&itok=BQUpeUeS" alt="" />
      <p className="iframe-text">Der Unsichtbare Zoo</p>
      <p>09.02.2024</p>
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="zoo-news-container">
      <h1>Willkommen zu den neuesten Zoo-News!</h1>
      <AliceCarousel
        //autoPlay={true}
        autoPlayInterval={2000}
        mouseTracking={true}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
};

export default ZooNewsComponent;
