import { Pagination } from 'react-bootstrap';
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
import ModalAddNewUser from './components/react_pratice/ModalAddNewUser';
import { useState } from 'react';



function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () =>{
    setIsShowModalAddNew(false);
  }

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
      <Container>
        <div className='my-3 add-new'>
          <span><h3>List Users: </h3></span>
          <button className='btn btn-success' onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
        </div>
        <TableUsers></TableUsers>
      </Container>
      <ModalAddNewUser show={isShowModalAddNew} handleClose={handleClose}></ModalAddNewUser>

    </div>
  );
}

export default App;
