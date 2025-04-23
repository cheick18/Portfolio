
import { Link } from 'react-router-dom'
import footer from '/assets/footer.jpg'
export default function Footer() {
  return (
   

<footer className="bg-white rounded-lg shadow-sm  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <div  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={footer} className="h-8" alt="Flowbite Logo" />
              
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link to="/realisations" className="hover:underline me-4 md:me-6">Réalisations</Link>
                </li>
                <li>
                    <Link to="/a-propos" className="hover:underline me-4 md:me-6">À propos</Link>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© Wague Cheickne | Création Web et Solutions Fullstack | Tous droits réservés</span>
    </div>
</footer>


  )
}
