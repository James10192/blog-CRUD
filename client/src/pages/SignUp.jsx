import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Veuillez remplir tous les champs.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.post('https://blog-crud-xo4b.onrender.com/api/auth/signup', formData);
      const data = res.data;
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.status === 200 || res.status === 201) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-4xl font-semibold dark:text-white bg-gradient-to-r from-orange-700 via-white to-green-700 p-2 rounded-lg"
            >
        My Modern Blog
      </Link>
      <p className='text-sm mt-5'>
            Ceci est la page d'inscription. Vous pouvez vous inscrire avec votre email et mot de passe
            ou avec Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
            <Label value="Votre nom d'utilisateur" />
              <TextInput
                type='text'
                placeholder="Nom d'utilisateur"
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Votre email' />
              <TextInput
                type='email'
                placeholder='nom@entreprise.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Votre mot de passe' />
              <TextInput
                type='password'
                placeholder='Mot de passe'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientMonochrome="success"
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Chargement...</span>
                </>
              ) : (
                'S\'inscrire'
              )}
            </Button>
            <OAuth />
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Vous avez déjà un compte ?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Se connecter
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
