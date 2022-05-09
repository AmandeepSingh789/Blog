import React, {useState,useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

import {ReactComponent as PostLogo} from './post_illustration.svg';

const Home = () => {

    const{data:blogs,isPending,error} =useFetch('http://localhost:9000/blogs')

  return (   
      
    <div className='home'>
        { error && <div> {error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs ={blogs} title ="All Blogs!" />}
        <PostLogo className="PostLogo"/>
    </div>
  );
}

export default Home;



/*
 Resources
  http://localhost:9000/blogs

  Home
  http://localhost:9000
  */