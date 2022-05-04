export interface Participant {

    nom: string,
    prenom: string,
    adresse: string,
    code_postal: number,
    ville: string,
    date_naissance: string,
    telephone: string,
    email: string,
    nom_tuteur?: string,
    prenom_tuteur?: string,
    document?: string,
    information: string,
}
