import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import newsData from './Newsdata.jsx';
import "../styles/Newsdetails.css"

const NewsDetails = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(newsId, 10));
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigiert einen Schritt zurück im Browser-Verlauf
  };
  if (!newsItem) {
    return <div>News item not found.</div>;
  }

  return (

    <article className="blog-post">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767507-1502574.png" 
        alt="Go back"

        onClick={goBack}
        style={{ cursor: 'pointer', width: '50px'}} 
      />
      <header className="blog-post-header">
        <h1 className="blog-post-title">{newsItem.title}</h1>
        <p className="blog-post-date">{newsItem.date}</p>
      </header>
      <figure className="blog-post-image">
        <img src={newsItem.image} alt={newsItem.title} />
      </figure>
      <section className="blog-post-content">
        <p>{newsItem.content}</p>
      </section>
    </article>
  );
};

export default NewsDetails;