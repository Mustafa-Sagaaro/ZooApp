import { useParams } from 'react-router-dom';
import newsData from './Newsdata.jsx'; 
import "../styles/Newsdetails.css"
const NewsDetails = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find(item => item.id === parseInt(newsId, 10));

  if (!newsItem) {
    return <div>News item not found.</div>;
  }

  return (
    <article className="blog-post">
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