
import { useRef, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import type { LightGallery as LightGalleryType } from 'lightgallery/lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

import DetailsProps from '../components/ProjetDetails/Deatials.interface';

export default function AutoCarousel( /*{ lien, images }: DetailsProps */) {
  const galleryRef = useRef<LightGalleryType | null>(null);
const  images=[
    {
        full: 'assets/projets/Capture_uts/inscription.png',
        alt: 'Inscription'
      },
    {
        full: 'assets/projets/Capture_uts/adminDashboard.png',
        alt: 'Dashboard admin'
      },
      {
        full: 'assets/projets/Capture_uts/adminDashboard2.png',
        alt: 'Dashboard admin'
      },
      {
        full:"assets/projets/Capture_uts/historiqueInscription.png",
        alt:"Dahboard admin"
      },
      {
        full: 'assets/projets/Capture_uts/formulaireInscrition.png',
        alt: "Formualire d'inscription"
      },
      {
        full: 'assets/projets/Capture_uts/formPaiement.png',
        alt: 'Formaulaire pour le paiement'
      },
      {
        full:"assets/projets/Capture_uts/PaiementsUI.png",
        alt:"Interface de payments"
      },
    
      {
        full: 'assets/projets/Capture_uts/listeIncription.png',
        alt: 'Liste des inscriptions'
      },
      {
        full:'assets/projets/Capture_uts/ListeCertification.png',
        alt:'Liste des certifications'
      },
      {
        full:'assets/projets/Capture_uts/ListeCertification.png',
        alt:'Liste des certifications'
      }
    

]
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
