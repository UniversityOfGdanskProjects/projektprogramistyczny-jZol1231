import { useCart } from '../../context/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { data } from '../../data/synthesizers';

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [userName, setUserName] = useState('');
    const [newComment, setNewComment] = useState('');
    const products = data;

    const [comments, setComments] = useState([]);

    // const handleAddComment = () => {
    //     if (newComment.trim() !== "" && userName.trim() !== "") {
    //         const comment = {
    //             id: products[id].comments.length + 1,
    //             name: userName,
    //             body: newComment,
    //         };

    //         products[id].comments = [comment, ...products[id].comments];

    //         setComments([...products[id].comments]);

    //         setNewComment("");
    //         setUserName("");
    //     }
    // };

    useEffect(() => {
        const savedComments = localStorage.getItem(`comments-${id}`);
        if (savedComments && savedComments.length !== 0) {
            setComments(JSON.parse(savedComments));
        } else {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(response => response.json())
                .then(data => {
                    const initialComments = data.slice(0, 5);
                    setComments(initialComments);
                    localStorage.setItem(`comments-${id}`, JSON.stringify(initialComments));
                })
                .catch(error => console.error("Error fetching comments:", error));
        }
    }, [id]);

    const handleAddComment = () => {
        if (newComment.trim() !== '' && userName.trim() !== '') {
            const comment = {
                id: uuidv4(), 
                product_id: id,
                name: userName,
                body: newComment,
            };

            const updatedComments = [comment, ...comments];
            setComments(updatedComments);

            localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));

            setNewComment('');
            setUserName('');
        }
    };




    const product = products[id];

    if (!product) {
        return <div className="text-white text-center py-20">Product not found</div>;
    }

    return (
        <section className="bg-black text-white py-20 px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">{ product.title }</h2>
            <img src={ product.image } alt={ product.title } className="w-1/2 mx-auto rounded-lg shadow-lg" />
            <p className="mt-4 text-2xl font-semibold">Price: {product.price}$</p>
            <button 
                onClick={() => addToCart(product)} 
                className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
                Add to Cart
            </button>
            <p className="mt-6 text-lg text-gray-300">{ product.description }</p>
            <p className="mt-6 text-lg text-gray-300">{ product.long_description }</p>
            <button onClick={() => navigate('/')} className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                Back to Home
            </button>

            <div className="mt-12 max-w-4xl mx-auto text-left">
                <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                <div className="bg-gray-900 p-4 rounded-lg shadow-md mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-2 mb-2 bg-gray-800 text-white rounded-md"
                    />
                    <textarea
                        placeholder="Write your comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-2 bg-gray-800 text-white rounded-md"
                    ></textarea>
                    <button 
                        onClick={handleAddComment} 
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Add Comment
                    </button>
                </div>
                {comments.length === 0 ? (
                    <p className="text-gray-400">No comments available.</p>
                ) : (
                    comments.map(comment => (
                        <div key={comment.id} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                            <h4 className="font-semibold text-lg">{comment.name}</h4>
                            <br></br>
                            <p className="text-gray-300">{comment.body}</p>
                        </div>
                    ))
                )}
            </div>

        </section>
    );
}