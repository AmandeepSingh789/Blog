import React, {useState,useEffect} from 'react';
import BlogList from './BlogList';

import {ReactComponent as PostLogo} from './post_illustration.svg';

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name,setName] = useState('mario');
    const handleDelete = (id) => {
        const newBlogs=blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{ 
        console.log(name)
    },[name]);

  return (   
      
    <div className='home'>
        <BlogList blogs ={blogs} title ="All Blogs!" handleDelete={handleDelete}/>
        <button onClick={() =>setName('Luigi')}>Change Name</button>
        <p>{name}</p>
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