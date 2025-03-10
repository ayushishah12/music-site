// import { useState, useEffect } from "react";

// const Review = () => {
//   const [reviews, setReviews] = useState([]);
//   const [reviewInput, setReviewInput] = useState("");

//   // Load reviews from localStorage on page load
//   useEffect(() => {
//     const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
//     setReviews(savedReviews);
//   }, []);

//   // Save reviews to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//   }, [reviews]);

//   const handleAddReview = () => {
//     if (reviewInput.trim()) {
//       const newReviews = [...reviews, reviewInput];
//       setReviews(newReviews);
//       setReviewInput(""); // Clear input after submission
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Music Reviews</h2>

//       {/* Input for adding a review */}
//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           value={reviewInput}
//           onChange={(e) => setReviewInput(e.target.value)}
//           placeholder="Write your review..."
//           className="w-full p-2 border rounded-md bg-gray-800 text-white"
//         />
//         <button
//           onClick={handleAddReview}
//           className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </div>

//       {/* Display Reviews */}
//       <div className="space-y-3">
//         {reviews.length > 0 ? (
//           reviews.map((review, index) => (
//             <div
//               key={index}
//               className="p-3 bg-gray-800 rounded-md border border-gray-700"
//             >
//               {review}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-400">No reviews yet. Be the first to review!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Review;
import { useState, useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState("");

  // Load reviews from localStorage on page load
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(savedReviews);
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = () => {
    if (reviewInput.trim()) {
      const newReviews = [...reviews, reviewInput];
      setReviews(newReviews);
      localStorage.setItem("reviews", JSON.stringify(newReviews)); // Save immediately
      setReviewInput(""); // Clear input after submission
    }
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // Save immediately
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Music Reviews</h2>

      {/* Input for adding a review */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={reviewInput}
          onChange={(e) => setReviewInput(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded-md bg-gray-800 text-white"
        />
        <button
          onClick={handleAddReview}
          className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>

      {/* Display Reviews */}
      <div className="space-y-3">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-gray-800 rounded-md border border-gray-700"
            >
              <span>{review}</span>
              <button
                onClick={() => handleDeleteReview(index)}
                className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default Review;