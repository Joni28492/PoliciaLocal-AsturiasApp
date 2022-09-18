


export interface ISegCiudadana {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 37 | 36 | 35;
    imgs?: string [],

}

export interface IRegDisciplinario {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 7 | 8 | 9;
    imgs?: string []
}


export interface ISegVial {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 75 | 76 | 77;
    puntos?: number
    imgs?: string []
}

export interface ILepar {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 34 | 33 | 32;
    imgs?: string []
}

export interface IAlcohol {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 34 | 35 | 36;
    imgs?: string []
}


export interface IAnimales {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 41 | 42 | 43;
    imgs?: string []
}


export interface IRegArmas {
    apartado: string;
    graduation: 'Muy Graves' | 'Graves' | 'Leves';
    description: string;
    articulo: 155 | 156 | 157;
    imgs?: string []
}