import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Globalvalue } from '../../admin-view/Services/CustomGlobalStates';
import AfterLoginNav from '../AfterLoginNav/AfterLoginNav';
import Footer from '../Common/Footer';
import './NewsFeed.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const NewsFeed = () => {

    //------------ REDUX

    const myState = useSelector((state)=>state.SetTheProfileGlobal)
    
  return (
    <>
    
    <AfterLoginNav/>

    <section className='newsfeed-sec-main'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='newsfeed-tag-card'>
                        <a href='#'>IT</a>
                        <a href='#'>Education</a>
                        <a href='#'>Food</a>
                        <a href='#'>New Startups</a>
                        <a href='#'>Agency</a>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='newsfeed-stream-part'>
                        <PostCard/>
                        <PostCard/>
                        <PostCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    
    </>
  )
}

export default NewsFeed