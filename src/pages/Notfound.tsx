
export default function Notfound() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary dark:text-primary-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-600 md:text-4xl dark:text-white">Il manque quelque chose.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Désolé, nous n'avons pas trouvé cette page. Vous trouverez beaucoup à explorer sur la page d'accueil. </p>
            <a href="/" className="inline-flex text-white bg-secondary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Retour à l'acceuil</a>
        </div>   
    </div>
</section>
  )
}
