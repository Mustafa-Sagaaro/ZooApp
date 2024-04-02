import 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Willkommen im <span className="Span-title">Zürich-Zoo!</span></h1>
            <div className="grid-container">
                <div className="item1">
                    <h2>Unsere Tiere</h2>
                    <p>Entdecken Sie die Vielfalt der Tierwelt.</p>
                    <button>Tiere Entdecken</button>
                </div>
                <div className="item2">
                    <img src="https://zoo-live.rokka.io/text_width_50_landscape_md_1x/e2fc059c34281bcd31b57f01369fd0431b98aa44/21983-0.jpg?h=e75ab034&itok=zyKkJalB" alt="imgTier" />
                </div>
                <div className="item4">
                    <img src="https://zoo-live.rokka.io/text_width_50_landscape_md_1x/e0736690bad7843cb92942d377d09bd11b52a4e2/m-roter-vari-baby-zz-5997.jpg?h=be8750e3&itok=dX1fi3KS" alt="Pflanze" />
                </div>
                <div className="item3">
                    <h2>News</h2>
                    <p>Checken sie die neusten News</p>
                    <button>News ansehen</button>
                </div>
                <div className="item5">
                    <h2>Kinderwelt</h2>
                    <p>Spannende Abenteuer warten auf unsere kleinen Gäste.</p>
                    <button>jetzt Entdecken</button>
                </div>
                <div className="item6">
                    <img src="https://zoo-live.rokka.io/home_landscape_lg_1x/353a6f19f653ab6e78d6f425ab544dcbb520854b/2244-23623-3.jpg?h=3a574668&itok=SQYQN_LQ" alt="Kinderzone" />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
