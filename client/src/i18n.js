import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traductions
const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "Sign In": "Sign In",
      "Sign Up": "Sign Up",
      "Email": "Email",
      "Password": "Password",
      "Username": "Username",
      "Loading": "Loading",
      "Continue with Google": "Continue with Google",
      "Don't have an account?": "Don't have an account?",
      "Already have an account?": "Already have an account?",
      "Please fill all the fields": "Please fill all the fields",
      "Error": "Error",
      // Ajoutez d'autres traductions ici
      "Home": "Accueil",
      "About": "À propos",
      "Dashboard": "Tableau de bord",
      "Create Post": "Créer un article",
      "Sign Out": "Se déconnecter",
      "Search...": "Rechercher...",
      "Recent Posts": "Articles récents",
      "Read More": "Lire la suite",
      "No posts found": "Aucun article trouvé",
      "Your Posts": "Vos articles",
      "Edit": "Modifier",
      "Delete": "Supprimer",
      "Create New Post": "Créer un nouvel article",
      "No posts yet": "Aucun article pour le moment",
      "Welcome to My Modern Blog": "Bienvenue sur Mon Blog Moderne",
      "Recent Posts": "Articles Récents",
      "Read More": "Lire la Suite",
      "No posts found": "Aucun article trouvé",
      "Loading...": "Chargement...",
      "Posts results": "Résultats des articles",
      "No posts found.": "Aucun article trouvé.",
      "Loading...": "Chargement...",
      "Show More": "Afficher plus",
      "Search Term": "Terme de recherche",
      "Sort": "Trier",
      "Latest": "Plus récent",
      "Oldest": "Plus ancien",
      "Category": "Catégorie",
      "Uncategorized": "Non catégorisé",
      "Apply Filters": "Appliquer les filtres",
      "View all posts": "Voir tous les articles"
    }
  },
  fr: {
    translation: {
      "Welcome": "Bienvenue",
      "Sign In": "Se connecter",
      "Sign Up": "S'inscrire",
      "Email": "Email",
      "Password": "Mot de passe",
      "Username": "Nom d'utilisateur",
      "Loading": "Chargement",
      "Continue with Google": "Continuer avec Google",
      "Don't have an account?": "Vous n'avez pas de compte ?",
      "Already have an account?": "Vous avez déjà un compte ?",
      "Please fill all the fields": "Veuillez remplir tous les champs",
      "Error": "Erreur"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
