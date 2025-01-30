import  { useState } from 'react';

const FeedbackModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, note }),
      });
      
      if (response.ok) {
        setNote('');
        setRating(0);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isModalOpen) {
    return (
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Give Feedback
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">We need your feedback</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          How would you rate your experience with the app today?
        </p>
        
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl transition-colors ${
                rating >= star ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              ★
            </button>
          ))}
        </div>
        
        <form onSubmit={handleSubmit}>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your note"
            className="w-full p-3 border rounded-lg mb-4 h-24 resize-none"
          />
          
          <button
            type="submit"
            disabled={isSubmitting || rating === 0}
            className={`w-full py-3 rounded-lg text-white font-medium ${
              isSubmitting || rating === 0
                ? 'bg-gray-300'
                : 'bg-blue-400 hover:bg-blue-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;