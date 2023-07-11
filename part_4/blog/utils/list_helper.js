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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
