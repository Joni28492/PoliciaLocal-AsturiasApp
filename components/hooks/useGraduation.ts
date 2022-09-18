import { useState } from "react"


export const useGraduation = () => {
  
    const colorsGraduation = {
        'Leves': 'green',
        'Graves':'darkgoldenrod',
        'Muy Graves': 'darkred'
      }
    
      const [graduaciones, setGraduaciones] = useState<string []>( ['Leves', 'Graves', 'Muy Graves'] )
      // console.log(graduaciones);
    
    
      const handleGraduaciones = (graduation:string)=>{
    
        if(!graduaciones.includes(graduation)){  
          setGraduaciones([...graduaciones, graduation])
          return;
        }
    
        setGraduaciones( [...graduaciones.filter(g=> g!==graduation)] )
    
      }
  
  
  
  
    return {
        handleGraduaciones,
        graduaciones,
        colorsGraduation,
    }
}
