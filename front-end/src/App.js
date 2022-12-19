import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/js/bootstrap';
import Home from './guest-view/Home/Home';
import About from './guest-view/About/About';
import Contact from './guest-view/Contact/Contact';
import Login from './guest-view/Login/Login';
import Signup from './guest-view/Signup/Signup';
import ProfileCreate from './guest-view/CreateProfile/ProfileCreate';
import Error400 from './guest-view/ErrorPages/Error400';
import Error500 from './guest-view/ErrorPages/Error500';
import UnderReview from './guest-view/ErrorPages/UnderReview';
import AfterLoginNav from './guest-view/AfterLoginNav/AfterLoginNav';
import NewsFeed from './guest-view/NewsFeed/NewsFeed';
import CreatePost from './guest-view/CreatePost/CreatePost';
import {BrowserRouter as Router, Route, Routes,Link,useNavigate } from 'react-router-dom';
import Navigation from './guest-view/Common/Navigation';
import Community from './guest-view/Community/Community';
import Policies from './guest-view/Policies/Policies';
import Message from './guest-view/Message/Message';
import CreateProposal from './guest-view/CreateProposal/CreateProposal';
import ProposalDetails from './guest-view/ProposalDetails/ProposalDetails';
import AllUsers from './admin-view/AllUsers/AllUsers';
import Category from './admin-view/Category/Category';
import AddCategory from './admin-view/Category/AddCategory';
import { useEffect, useState } from 'react';
import ServiceDown from './guest-view/ErrorPages/ServiceDown';
// import Home from './guest-view/Dark/Home';

function App() {




  return (
    <div className="App">
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <ProfileCreate/> */}
      {/* <Error400/> */}
      {/* <Error500/> */}
      {/* <UnderReview/> */}
      {/* <AfterLoginNav/> */}
      {/* <NewsFeed/> */}
      {/* <CreatePost/> */}


      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/create-profile' element={<ProfileCreate/>}/>
          <Route path='/underreview' element={<UnderReview/>}/>
          <Route path='/newsfeed' element={<NewsFeed/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/policies' element={<Policies/>}/>
          <Route path='/messages' element={<Message/>}/>
          <Route path='/create-proposal' element={<CreateProposal/>}/>
          <Route path='/proposal-details' element={<ProposalDetails/>}/>
          <Route path='*' element={<Error400/>}/>
          <Route path='/servicedown' element={<ServiceDown/>}/>

          {/* ----------- ADMIN ------------ */}

          <Route path='/admin/allusers' element={<AllUsers/>} />
          <Route path='/admin/categories' element={<Category/>}/>
          <Route path='/admin/addcategory' element={<AddCategory/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
