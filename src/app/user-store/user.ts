export interface IUser {
    id: number,
    name?: string,
    username?: string,
    email?: string,
    address?: IAddress,
    phone?: string,
    website?: string,
    company?: ICompany
}

export interface ICompany {
    id: number,
    catchPhrase: string,
    name: string,
    bs: string;
}

export interface IAddress {
    id: number,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}

export interface IGeo {
    lat: string,
    lng: string
}

