
import { useRef, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import type { LightGallery as LightGalleryType } from 'lightgallery/lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';


export default function FoodArea() {
   const  images=[
    {
        full:'assets/projets/foodArea/food.png',
        alt:'Home'
    },


    {
        full: 'public/assets/projets/foodArea/astuce.png',
        alt: 'Home'
      },
      {
        full: 'public/assets/projets/foodArea/description-image.png',
        alt: 'Home'
      },
     
      {
        full: 'public/assets/projets/foodArea/categorie.png',
        alt: 'Plage au coucher du soleil'
      },
      {
        full: 'public/assets/projets/foodArea/choixconnexion.png',
        alt: 'Forêt enneigée'
      },
    
      {
        full: 'public/assets/projets/foodArea/detailRecette.png',
        alt: 'Forêt enneigée'
      },
    
      {
        full:'public/assets/projets/foodArea/inscription.png',
        alt:'Inscriptions'
      },
      {
        full:'public/assets/projets/foodArea/contact.png',
        alt:'Page de contact'
      },
     
      {
        full:'public/assets/projets/foodArea/footer.png',
        alt:'Footer'
      }

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
