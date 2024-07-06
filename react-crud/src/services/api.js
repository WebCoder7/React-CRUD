const BASE_URL = 'https://json-server-project.onrender.com';

export const getPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });
  return response.json();
};

export const deletePost = async (id) => {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE'
  });
};
