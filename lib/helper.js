const baseUrl = "http://localhost:3000/api/posts"

// endpoint: http://localhost:3000/api/posts
export default async function getPost(id) {
  const response = await fetch(baseUrl)
  const posts = await response.json()

  if(id) {
    return posts.find(post => post.id == id)
  }

  return posts
}