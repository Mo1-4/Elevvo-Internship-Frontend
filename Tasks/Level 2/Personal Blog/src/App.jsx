import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'


import blogPosts from './blogposts'

// Available categories
const categories = ["All", "Tech", "Travel", "Food"]

function App() {
  const [posts, setPosts] = useState(blogPosts)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = posts

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredPosts(filtered)
    setCurrentPage(1) 
  }, [selectedCategory, searchTerm, posts])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div className="app">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Search and Filter Section */}
          <div className="controls-section">
            {/* Search Bar */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                aria-label="Search blog posts"
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  aria-label={`Filter by ${category} category`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-summary">
            <p>
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Blog Posts Grid */}
          {currentPosts.length > 0 ? (
            <div className="blog-grid">
              {currentPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="card-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="post-image"
                      loading="lazy"/>
                  </div>
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{formatDate(post.date)}</span>
                    </div>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-description">{post.description}</p>
                    <button className="read-more-btn" aria-label={`Read more about ${post.title}`}>
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>No posts found matching your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn"
                aria-label="Previous page"
              >
                Previous
              </button>
              
              <div className="page-numbers">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`page-btn ${currentPage === pageNumber ? 'active' : ''}`}
                    aria-label={`Go to page ${pageNumber}`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn"
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App
