import { ISideBarEntries } from "../../interfaces/ui";
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import EditRoadOutlinedIcon from '@mui/icons-material/EditRoadOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';




export const sideBarEntries:ISideBarEntries [] = [
    {
        href: '/bloqueI',
        Icon:  BookOutlinedIcon ,
        primary: 'Bloque I',
        arrow: {
            arrowPosition: false,
        },
        divider: true,
        childrens: [
            {
                href: '/bloqueI/constitucionI',
                primary: 'Constitución I',
            },
            {
                href: '/bloqueI/constitucionII',
                primary: 'Constitución II',
            },
            {
                href: '/bloqueI/constitucionIII',
                primary: 'Constitución III',
            },
            {
                href: '/bloqueI/estatuto-autonomia',
                primary: 'Estatuto de autonomia',
            },
            {
                href: '/bloqueI/administracion-local',
                primary: 'Administración local',
            },
            {
                href: '/bloqueI/derecho-admin-fuentes',
                primary: 'Derecho Administrativo y sus fuentes',
            },
            {
                href: '/bloqueI/acto-administrativo',
                primary: 'El acto administrativo',
            },
            {
                href: '/bloqueI/procedimiento-admin-comun',
                primary: 'Procedimiento administrativo común',
            },
            {
                href: '/bloqueI/personal-servicio-corporaciones-locales',
                primary: 'Personal al servicio de las corporaciones locales',
            },
            {
                href: '/bloqueI/haciendas-locales',
                primary: 'Haciendas locales',
            },
            {
                href: '/bloqueI/historia-asturias',
                primary: 'Historia Asturias',
            },
            {
                href: '/bloqueI/geografia-asturias',
                primary: 'Geografía Asturias',
            },
        ]
    },
    {
        href: '/bloqueII',
        Icon: LocalPoliceOutlinedIcon ,
        primary: 'Bloque II',
        divider: true,
        arrow: {
            arrowPosition: false,
        },
        childrens: [
            {
                href: '/bloqueII/ffccsI',
                primary: 'Fuerzas y cuerpos de seguridad I',
            },
            {
                href: '/bloqueII/ffccsII',
                primary: 'Fuerzas y cuerpos de seguridad II',
            },
            {
                href: '/bloqueII/ffccsIII',
                primary: 'Fuerzas y cuerpos de seguridad III',
            },
            {
                href: '/bloqueII/ffccsIV',
                primary: 'Fuerzas y cuerpos de seguridad IV',
            },
            {
                href: '/bloqueII/seguridad-ciudadana-4-2015',
                primary: 'Seguridad Ciudadana',
            },
            {
                href: '/bloqueII/proteccion-civil',
                primary: 'Proteccion Civil',
            },
            {
                href: '/bloqueII/ley-coordinacion-policias-locales-2-2007',
                primary: 'El acto administrativo',
            },
           
            {
                href: '/bloqueII/lepar-8-2002',
                primary: 'Ley de espectaculos publicos y actividade srecreativas',
            },
            {   //ponerlas divididas
                href: '/bloqueII/normativa-autonomica',
                primary: 'Normativa Autonomica',
                divider: true,
                childrens: [
                    {
                        href: '/bloqueII/normativa-autonomica/animales',
                        primary: 'Normativa Animales',
                    },
                    {
                        href: '/bloqueII/normativa-autonomica/alcohol',
                        primary: 'Normativa Alcohol y drogas',
                    }
                ]
            },
            {
                href: '/bloqueII/colectivos-riesgo',
                primary: 'Colectivos de riesgo',
            },
            {
                href: '/bloqueII/reglamento-armas',
                primary: 'Reglamento de armas',
            },
            {
                href: '/bloqueII/policia-medioambiental',
                primary: 'policía medioambiental',
            },
        ]
    },
    {
        href: '/bloqueIII',
        Icon:  EditRoadOutlinedIcon ,
        primary: 'Bloque III',
        divider: true,
        arrow: {
            arrowPosition: false,
        },
        childrens: [
            {
                href: '/bloqueIII/ley-trafico-vehiculos-motor-lsv',
                primary: 'Ley sobre tráfico, circulación de vehículos a motor y seguridad vial ',
            },
            {
                href: '/bloqueIII/normas-comportamiento-circulacion',
                primary: 'Normas de comportamiento en la circulación',
            },
            {
                href: '/bloqueIII/circulacion-vehiculosI',
                primary: 'Circulación de vehículos I',
            },
            {
                href: '/bloqueIII/circulacion-vehiculosII',
                primary: 'Circulación de vehículos II',
            },
            {
                href: '/bloqueIII/senalizacion',
                primary: 'Señalización',
            },
            {
                href: '/bloqueIII/autorizaciones-administrativas',
                primary: 'Autorizaciones administrativas',
            },
            {
                href: '/bloqueIII/infracciones',
                primary: 'Infracciones de Tráfico',
            },
            {
                href: '/bloqueIII/procedimiento-sancionador',
                primary: 'Procedimiento sancionador',
            },
            {
                href: '/bloqueIII/documentacion-vehiculos',
                primary: 'Documentación Vehículos',
            },
            {
                href: '/bloqueIII/accidente-trafico',
                primary: 'El accidente de tráfico',
            },
            {
                href: '/bloqueIII/transporte',
                primary: 'El transporte',
            },
            {
                href: '/bloqueIII/transporte-mercancias-peligrosas',
                primary: 'El transporte de mercancias peligrosas',
            },
        ]
    },
    {
        href: '/bloqueIV',
        Icon:  GavelOutlinedIcon ,
        primary: 'Bloque IV',
        divider: true,
        arrow: {
            arrowPosition: false,
        },
        childrens: [
        
            {
                href: '/bloqueIV/concepto-delito',
                primary: 'El concepto de delito, penas, medidas de seguridad etc...',
            },
            {
                href: '/bloqueIV/modificativas-responsabilidad-penal',
                primary: 'Circunstancias modificativas responsabilidad de la penal',
            },
            {
                href: '/bloqueIV/homicidio-sus-formas',
                primary: 'El homicidio y sus formas',
            },
            {
                href: '/bloqueIV/torturas-integridad-moral-otros',
                primary: 'Torturas y otros delitos contra la integridad moral',
            },
            {
                href: '/bloqueIV/delitos-contra-patrimonio',
                primary: 'Delitos contra el patrimonio',
            },
            {
                href: '/bloqueIV/delitos-seguridad-vial',
                primary: 'Delitos contra la seguridad vial',
            },
            {
                href: '/bloqueIV/delitos-admin-publica',
                primary: 'Delitos contra la administración pública',
            },
            {
                href: '/bloqueIV/delitos-admin-justicia',
                primary: 'Delitos contra la administración de  justicia',
            },
            {
                href: '/bloqueIV/policia-judicial',
                primary: 'Policía local como policía judicial',
            },
            {
                href: '/bloqueIV/proceso-civil',
                primary: 'El proceso civil',
            },
            {
                href: '/bloqueIV/contencioso-asministrativo',
                primary: 'Contencioso administrativo',
            },
            {
                href: '/bloqueIV/',
                primary: '',
            },
        ]
    },
    {
        href: '/settings',
        Icon:  PermDataSettingIcon ,
        primary: 'Configuracion',
    },
]
