
   export const telechargerCV = () => {
     
      const link = document.createElement('a');
      link.href = '/cv.pdf';  
      link.download = 'Mon_CV.pdf'; 
      link.click();
    };