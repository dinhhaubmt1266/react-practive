import './App.scss';
import Button from './components/button/Button';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import Header from './components/react_pratice/Header';
import TableUsers from './components/react_pratice/TableUsers';
import Toggle from './components/state/Toggle';
import Game from './components/tictactoe/Game';
import YoutubeList from './components/youtube/YoutubeList';
import Container from 'react-bootstrap/Container';


function App() {
  return(
    // <YoutubeList>
    //   <h4>
    //   Cần thêm bao nhiêu nắng để vừa bóng tối lạnh lùng 
    //   Cần thêm yêu bao nhiêu để yêu đến vô cùng 
    //   Cần thêm bao nhiêu nhớ để lòng bớt những dại khờ 
    //   Cần thêm đau bao nhiêu để em thôi hững hờ 
    //   </h4>
    // </YoutubeList>
    <div className='app-container'>
      <Header></Header>
      <TableUsers></TableUsers>
    </div>
  );
}

export default App;
