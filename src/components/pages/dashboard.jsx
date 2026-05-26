import React from 'react';
import { blogs } from '../../data/blogs';
import { useNavigate } from 'react-router-dom';

const statsCards = [
  {
    label: 'Total Posts',
    value: '10',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    label: 'Total Comments',
    value: blogs.reduce((sum, b) => sum + b.commentCount, 0).toString(),
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2z" />
      </svg>
    ),
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    label: 'Total Authors',
    value: new Set(blogs.map(b => b.authorName)).size.toString(),
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    bg: 'bg-purple-50',
    border: 'border-purple-200',
  },
  {
    label: 'Monthly Readers',
    value: '50K+',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const recentPosts = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statsCards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} border ${card.border} rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex-shrink-0">{card.icon}</div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
              <p className="text-sm text-gray-500">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Recent Posts</h2>
          <button
            onClick={() => navigate('/write')}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            + New Post
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">#</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">Title</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">Author</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">Comments</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentPosts.map((blog, idx) => (
                <tr key={blog.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-400">{idx + 1}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{blog.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <img
                        src={blog.authorProfileUrl}
                        alt={blog.authorName}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      {blog.authorName}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{blog.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {blog.commentCount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate(`/detail/${blog.id}`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      View →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Posts by Comments */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Posts by Comments</h2>
        <div className="space-y-3">
          {[...blogs]
            .sort((a, b) => b.commentCount - a.commentCount)
            .slice(0, 5)
            .map((blog, idx) => (
              <div key={blog.id} className="flex items-center gap-4">
                <span className="w-6 text-center text-xs font-bold text-gray-400">#{idx + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                      onClick={() => navigate(`/detail/${blog.id}`)}
                    >
                      {blog.name}
                    </span>
                    <span className="text-xs text-gray-500">{blog.commentCount} comments</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${(blog.commentCount / 20) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
