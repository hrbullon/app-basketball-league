import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TeamScreen } from './pages/teams/TeamScreen';
import { HomeScreen } from './pages/home/HomeScreen';

import { ScoreBoardAdminScreen } from './pages/scoreboard/ScoreBoardAdminScreen';
import { ScoreBoardClientScreen } from './pages/scoreboard/ScoreBoardClientScreen';
import { ScoreBoardResume } from './pages/scoreboard/ScoreBoardResume';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomeScreen /> } />
          <Route path="/teams" element={ <TeamScreen /> } />
          <Route path="/scoreboard/admin" element={ <ScoreBoardAdminScreen /> } />
          <Route path="/scoreboard/client" element={ <ScoreBoardClientScreen /> } />
          <Route path="/scoreboard/resume/:id" element={ <ScoreBoardResume/> } />
        </Routes>
      </BrowserRouter>
      <div className='footer text-center'>
        <a href='https://github.com/hrbullon' target="_blank">Copyrights @hrbullon</a>
      </div>
    </div>
  )
}

export default App
