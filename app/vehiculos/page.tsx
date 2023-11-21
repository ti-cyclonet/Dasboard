

import { VehiCrud } from '@app/vehiculos/ui/components/VehiCrud';
import { VehiProvider } from '@app/vehiculos/ui/context/VehiContext';



function VehiculosPage() {  

  return (
    <VehiProvider>
      <VehiCrud />
    </VehiProvider >
);
}

export default VehiculosPage