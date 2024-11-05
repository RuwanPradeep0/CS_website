import React, { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "../../services/PostService";
import "./Postview.css";
import { Link } from 'react-router-dom'; 

const PostView = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await getAllPosts();
        if (response.error) {
            console.error(response.error);
        } else {
            setPosts(response);
        }
    };

    const handleDelete = async (postId) => {
        const response = await deletePost(postId);
        if (response.error) {
            console.error(response.error);
        } else {
            fetchPosts();
        }
    };

    useEffect(() => {
        fetchPosts(); 
    }, []);

    const getImageUrl = (imageId) => {
        return `http://localhost:8080/api/v1/post/image/${imageId}`;
    };

    return (
        <div className="postview">
            <div className="postUplod">
                <Link to="/admin/postUpload">
                    <div className="text">Post Upload</div>
                </Link>
            </div>
            <div className="postview_container">
                <div className="posts-section">
                    <h1>Post View</h1>
                    {posts.length === 0 ? (
                        <p>No posts available</p>
                    ) : (
                        <ul>
                            {posts.map(post => (
                                <li key={post.id} className="post-item">
                                    <h2>Topic : {post.title}</h2>
                                    <p>Description : {post.description.replace(/<\/?p>/g, '')}</p>
                                    {post.imageId && (
                                        <img 
                                            src={getImageUrl(post.imageId)} 
                                            alt={post.title} 
                                            className="post-image" 
                                        />
                                    )}
                                    <div className="btn">
                                        <button onClick={() => handleDelete(post.id)} className="edit-button">Edit</button>
                                        <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostView;
