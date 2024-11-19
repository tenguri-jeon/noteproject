// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Route, HashRouter  as Router, Routes }   from "react-router-dom";
import GlobalStyle from './styled/GlobalStyle';
import MordernList from './components/mordern';
import MakeNote from './components/makenote';
import Firstpage from './components/firstpage';
import Edit from './components/edit/index';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path='/' element={<MordernList />}>
                <Route index element={<Firstpage />} />
                <Route path='makenote/:id' element={<MakeNote />} />
                <Route path='/newnote' element={<MakeNote />} />
                <Route path='/edit/:id' element={<Edit />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

