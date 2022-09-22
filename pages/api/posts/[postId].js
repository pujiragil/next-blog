import data from "../data"

export default function handler(req, res) {
  const { postId } = req.query
  const { Posts } = data
  
  if(postId) {
    const post = Posts.find(post => post.id === parseInt(postId))

    if(!post) return res.status(404).json({ error: "Post Id Not Found 404" })

    return res.status(200).json(post)
  }

  return res.status(404).json({ error: "Post Data ID Not Found 404" })
}