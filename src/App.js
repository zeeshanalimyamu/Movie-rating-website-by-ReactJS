import { element } from 'prop-types';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import movie from  './movie.json';
function App() {
  return (
    <div className="App">
           <Header/>
        <div className="main">
          {
           movie.map((element,index)=> {
              return(
                <Movie
                 key= {index} 
                 Title={element.Title}
                 year={element.Year}
                 Img={element.Poster}
                 />  

              )
            })

          }
           

        </div>
    </div>
  );
}

export default App;
