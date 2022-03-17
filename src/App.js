import './App.css';
import { reviewers } from './data/reviewers-data';
import { Review } from './components/Review';
import img1 from './img/1.png';

function App() {
  // const { srcImg, name, country, company, role, review } = reviewers;
  return (
    <div className="App">
      <div className='container'>
        <h1>Student's reviews</h1>
        {
          reviewers.map( element => <Review
            key={element.id}
            srcImg={img1}
            name={element.name}
            country={element.country}
            role={element.role}
            company={element.company}
            review={element.review}
            />)
          }
      </div>
    </div>
  );
}

export default App;
