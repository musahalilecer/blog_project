import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Technology', 'Travel', 'Food', 'Health', 'Science', 'Lifestyle', 'Business'];

const WritePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    category: '',
    imageUrl: '',
    summary: '',
    content: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required.';
    if (!form.category) newErrors.category = 'Please select a category.';
    if (!form.summary.trim()) newErrors.summary = 'Summary is required.';
    if (!form.content.trim()) newErrors.content = 'Content is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Submitted!</h2>
          <p className="text-gray-500 mb-6">Your blog post "<span className="font-semibold text-gray-700">{form.title}</span>" has been submitted successfully.</p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => { setForm({ title: '', category: '', imageUrl: '', summary: '', content: '' }); setSubmitted(false); }}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Write Another
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors mb-4 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Write New Post</h1>
        <p className="text-gray-500 mt-1">Share your story with the world</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">

        {/* Title */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="title">
            Post Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter an engaging title..."
            className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.title ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        {/* Category & Image URL */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="category">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white ${errors.category ? 'border-red-400' : 'border-gray-300'}`}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="imageUrl">
              Cover Image URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        {/* Image Preview */}
        {form.imageUrl && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-semibold text-gray-700 mb-3">Cover Image Preview</p>
            <img
              src={form.imageUrl}
              alt="Cover preview"
              className="w-full h-48 object-cover rounded-xl border border-gray-100"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}

        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="summary">
            Short Summary <span className="text-red-500">*</span>
          </label>
          <textarea
            id="summary"
            name="summary"
            rows={3}
            value={form.summary}
            onChange={handleChange}
            placeholder="Write a brief summary of your post (shown on cards)..."
            className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${errors.summary ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.summary && <p className="text-red-500 text-xs mt-1">{errors.summary}</p>}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="content">
            Post Content <span className="text-red-500">*</span>
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            value={form.content}
            onChange={handleChange}
            placeholder="Write your full blog post here..."
            className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y ${errors.content ? 'border-red-400' : 'border-gray-300'}`}
          />
          {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
          <p className="text-xs text-gray-400 mt-2">{form.content.length} characters</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pb-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <div className="flex gap-3">
            <button
              type="button"
              className="px-6 py-3 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md"
            >
              Publish Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WritePost;
