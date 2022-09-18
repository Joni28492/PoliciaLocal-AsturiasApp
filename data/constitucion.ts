interface IFechasConstitucion{
    date: string;
    desc: string;
    img: string;
    more?: string;
}

export const fechasConstitucion:IFechasConstitucion [] = [
    {
        date: '31 Octubre',
        desc: 'Texto aprobado por las Cortes ',
        img: 'https://www.congreso.es/backoffice_doc/prensa/notas_prensa/64159_1544109990268.jpg',
        more: 'sesiones plenarias, Congreso de los Diputados | Senado'
    },
    {
        date: '6 Diciembre',
        desc: 'Ratificado por el pueblo español',
        img: 'https://www.alertadigital.com/wp-content/uploads/2016/10/banderas-patriotas.jpg',
        more: 'Referendum'
    },
    {
        date: '27 Diciembre',
        desc: 'Sancionado y promulgado por el Rey',
        img: 'http://estaticos.elperiodico.com/resources/jpg/0/2/1382378885720.jpg'
    },
    {
        date: '29 Diciembre',
        desc: 'Publicado en el BOE',
        img: 'https://pbs.twimg.com/profile_images/1227155947002486784/Kqn1Fzhe_400x400.jpg',
        more: 'Tambien entra en vigencia como lo indica su disposicion final'
    }
]