export const urlCertificationFormer = (age: number): string => {

    if (age < 5 ) {
        return 'G'
    }

    if (age <=5 && age <= 13) {
        return 'PG&certification=G'
    }

    if (13 <= age && age <=18) {
        return 'G&certification=PG&certification=PG&certification=PG-13'
    }

    return 'G&certification=PG&certification=PG-13&certification=R'
}