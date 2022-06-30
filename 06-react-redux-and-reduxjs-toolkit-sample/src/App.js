import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, getPosts } from './redux/post/post.reducer';

function App() {
  const { value, posts, status } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const Post = ({post}) => {
    const [isMore, setIsMore] = useState(false);
    return (
      <div className='post' onClick={() => setIsMore(!isMore)}>
        <h3>{post.title}</h3>
        {isMore ? <p>{post.body}</p> : <p>{`${post.body.substring(0, 50)} ...`}</p>}
      </div>
    )
  }

  const PostsListContainer = ({posts, status}) => {
    if(status === 'loading') {
      return <div className='loading'></div>;
    }
    if(status === 'success' || posts.length) {
      return (
        <>
          {
            posts.map(post => <Post key={post.id} post={post} />)
          }
        </>
      )
    }
    return <></>;
    
  }

  return (
    <div className="App">
      <h1>Building statemanagement with react-redux and @reduxjs/toolkit</h1>
      <div className='container'>
        <h2>Synchronous</h2>
        <div className='counter'>{value} times</div>
        <button className='button' onClick={() => dispatch(increment())}>Increase</button>
        <button className='button' onClick={() => dispatch(decrement())}>Decrease</button>
        <button className='button' onClick={() => dispatch(incrementByAmount(5))}>Increase By 5</button>
      </div>
      <div className='container'>
        <h2>Asynchronous</h2>
        <button className='button' style={{marginTop: '0'}} onClick={() => dispatch(getPosts())}>Get Posts</button>
        <PostsListContainer posts={posts} status={status} />
      </div>
    </div>
  );
}

export default App;
