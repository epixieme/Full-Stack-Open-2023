const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (accumulator, currentBlog) => accumulator + currentBlog.likes;
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const mostLikes = Math.max(...blogs.map((item) => item.likes));
  return blogs.find((item) => item.likes === mostLikes);
};

const mostBlogs = (blogs) => {
  const mostBlogs = Math.max(...blogs.map((item) => item.blogs));
  return blogs
    .filter((item) => item.blogs === mostBlogs)
    .map((elem) => ({ author: elem.author, blogs: elem.blogs }))[0];
};

const mostLikes = (blogs)=>{

  const mostLikes = Math.max(...blogs.map((item) => item.likes));
  return blogs
  .filter((item) => item.likes === mostLikes)
  .map((elem) => ({ author: elem.author, likes: elem.likes }))[0];

}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};
