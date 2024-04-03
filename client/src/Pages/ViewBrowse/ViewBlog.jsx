import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AuthorDetails from './AuthorDetails';
import Blog from './Blog';
import Comment from './Comment';
import './ViewBrowse.css';
import Button from '../../Components/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { LiaWindowCloseSolid } from "react-icons/lia";

const ViewBlog = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const [isOpen, setIsOpen] = useState(false); 

  const [author, setAuthor] = useState(data.authorDetails);
  const [blog, setBlog] = useState(data.content);
  const [title, setTitle] = useState(data.title);
  const [topics, setTopics] = useState(data.topics);
  const [description, setDescription] = useState(data.description);
  const [comments, setComments] = useState(data.comments);

  const newComments = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <>
      <div className='viewBlog-container relative lg:flex'>
        {!isOpen && (
          <GiHamburgerMenu
            className='icon-Container absolute text-3xl'
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        {isOpen && (
          <>
            <LiaWindowCloseSolid
              className='close-icon absolute z-30 top-2 left-2 text-3xl cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
            <AuthorDetails {...author} />
          </>
        )}
        <Blog topics={topics} blog={blog} />
        <Comment addComment={newComments} oldComments={comments} />
      </div>
    </>
  );
};

export default ViewBlog;

