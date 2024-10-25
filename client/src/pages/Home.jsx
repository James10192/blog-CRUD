import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://blog-crud-xo4b.onrender.com/api/post/getPosts');
        setPosts(res.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Bienvenue sur Mon Blog</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Ici, vous trouverez une variété d'articles et de tutoriels sur des sujets tels que
          le développement web, l'ingénierie logicielle et les langages de programmation.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          Voir tous les articles
        </Link>
      </div>
     

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>{t('Recent Posts')}</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              {t('View all posts')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
