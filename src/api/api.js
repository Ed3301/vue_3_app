import axios from 'axios';

export default class Api {
    static getAdmins = async () => {
        return await axios.get('/src/data/admins.json');
    };
    static getAuthors = async () => {
        return await axios.get('/src/data/authors.json');
    };
    static getArticles = async () => {
        return await axios.get('/src/data/articles.json');
    };
}