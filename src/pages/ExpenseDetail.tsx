
import { useRef, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import type { LightGallery as LightGalleryType } from 'lightgallery/lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';


export default function ExpenseDetail() {
   const images=[
        {
            full: 'public/assets/projets/gestionInterne/adminDashboard.png',
            alt: 'expense'
          },
          {
            full: 'public/assets/projets/captureexpense/dashboardExpenseCompte2.png',
            alt: 'Montagne enneigée'
          },
          {
            full: 'public/assets/projets/captureexpense/Screenshot_20240823-131454.png',
            alt: 'Plage au coucher du soleil'
          },
          {
            full: 'public/assets/projets/captureexpense/Screenshot_20240823-131814.png',
            alt: 'Forêt enneigée'
          },
          {
            full: 'public/assets/projets/captureexpense/Screenshot_20240823-132017.png',
            alt: 'Forêt enneigée'
          },
          {
            full: 'public/assets/projets/captureexpense/Screenshot_20240823-132017.png',
            alt: 'Forêt enneigée'
          },
          {
            full:'public/assets/projets/captureexpense/Screenshot_20240823-132145.png',
            alt:'Page de contact'
          },
          {
            full:'public/assets/projets/captureexpense/Screenshot_20240823-132223.png',
            alt:'Page de contact'
          },
          {
            full:'public/assets/projets/captureexpense/Screenshot_20240823-132238.png',
            alt:'Page de contact'
          },
          {
            full:'public/assets/projets/captureexpense/Screenshot_20240823-132603.png',
            alt:'Page de contact'
          },
        
    ]

  const galleryRef = useRef<LightGalleryType | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (galleryRef.current) {
        galleryRef.current.openGallery(0); // ouvre à la première image
      }
    }, 300); // attendre un peu que les images se chargent
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ visibility: 'hidden', position: 'absolute', top: 0, left: 0 }}>
      <LightGallery
        onInit={(detail) => (galleryRef.current = detail.instance)}
        speed={500}
        //</div>licenseKey="0000-0000-000-0000"
        plugins={[lgThumbnail]}
      >
        {images.map((img, index) => (
          <a href={img.full} key={index}>
            <img
              src={img.full}
              alt={img.alt}
              style={{ width: '100px', height: 'auto' }}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
