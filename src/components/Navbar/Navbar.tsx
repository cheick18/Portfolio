import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import logomenu2 from '/assets/footer.jpg?url'
import teeslogo from '/assets/teeslogo.png?url'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { NavigationProps } from './Navbar.interface'

/*const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Réalisations', href: '/realisations', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]
*/
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [navigation, setNavigation] = useState<NavigationProps[]>([
    { name: 'Home', href: '/', current: true },
    { name: 'Réalisations', href: '/realisations', current: false },
    { name: 'À propos', href: '/a-propos', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]);
  const handleNavigationChange = (href: string) => {
    setNavigation(prevNavigation =>
      prevNavigation.map(item =>
        item.href === href ? { ...item, current: true } : { ...item, current: false }
      )
      
    );

  };

  const getClassNames = (itemHref: string) => {
    let className = 'py-2 text-sm font-medium';

    if (itemHref === currentUrl && currentUrl !== '/') {
      return classNames(className, 'border-b-2  border-b-[#37538C]  text-[#37538C] px-0');
    }

    if (itemHref === currentUrl && currentUrl === '/') {
      return classNames(className, 'border-b-2 border-white text-white px-0');
    }

    if (itemHref !== currentUrl && currentUrl !== '/') {
      return classNames(className, 'text-gray-950 hover:border-b-2 hover:border-b-[#37538C] hover:text-[#37538C]');
    }

   
    if (itemHref !== currentUrl && currentUrl === '/') {
      return classNames(className, 'text-gray-200 hover:border-b-2 hover:text-white');
    }

  
    return classNames(className);
  };
  const getClassNamesMobileSize = (itemHref: string) => {
    let className = 'rounded-md py-2 text-base font-medium';

    if (itemHref === currentUrl && currentUrl !== '/') {
      return classNames(className, 'border-b-2  border-b-secondray  text-secondary px-0');
    }

    if (itemHref === currentUrl && currentUrl === '/') {
      return classNames(className, 'border-b-2  border-b-white  text-white px-0');
    }

    if (itemHref !== currentUrl && currentUrl !== '/') {
      return classNames(className, 'text-gray-950');
    }

   
    if (itemHref !== currentUrl && currentUrl === '/') {
      return classNames(className, 'text-gray-200');
    }

  
    return classNames(className);
  };

  const getClassNamesColor=()=>{
    let className='group relative inline-flex items-center justify-center rounded-md p-2  hover:bg-[#37538C]  focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset';
    if(currentUrl=='/')
      return classNames(className,'text-white')
 
    return classNames(className,'text-gray-900 hover:text-white')
  }
  return (
    <Disclosure as='nav'>
      <div className="container-fluid">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className={getClassNamesColor}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden " />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start md:justify-between lg:justify-between">
            <div className="flex shrink-0 items-center">
              <Link to='/'>
              <img
                alt="Your Company"
                src={currentUrl=='/'? teeslogo:logomenu2}
                className="h-10 w-auto"
              />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 gap-2">
                {navigation.map((item) => (
                  <Link
                  onClick={()=>handleNavigationChange(item.href)}
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={getClassNames(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link} // Utilisation de Link au lieu de <a>
              to={item.href} // Utilisation de 'to' au lieu de 'href'
              aria-current={item.current ? 'page' : undefined}
              className={getClassNamesMobileSize(item.href)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
