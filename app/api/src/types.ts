export interface UserInterface {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    phoneNumber: string,
    password: string,
    photo?: string,
    _orders?: string,
    _wishlist?: string[],
    _reports?: string,
    downloads?: string[]
    _adress?: string | {
        country: String,
        city: String,
        street: String,
        state: String,
        zip: String,
        email: String,
        phoneNumber: String
    },



}