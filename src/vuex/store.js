import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('auth_token') || null,
            admins: [
                {
                    id: 1,
                    name: "Admin",
                    super: false,
                    pwd: 54321,
                    email: "gfrediani1@senate.gov",
                    token: "63da5cc1-8506-4e92-847f-afd39776dea5"
                },
                {
                    id: 2,
                    name: "Super user",
                    super: true,
                    pwd: 12345,
                    email: "jpenddreth0@census.gov",
                    token: "63da5cc1-8506-4e92-847f-afd39776dea5"
                }
            ],
            articles: [
                {
                    "id": 1,
                    "title": "Article title 1",
                    "body": "Article body 1",
                    "author_id": 1,
                    "created_at": "2017-07-14T17:17:33.010Z",
                    "updated_at": "2017-07-14T17:17:33.010Z",
                    "deleted_at": "2017-07-14T17:17:33.010Z"
                },
                {
                    "id": 2,
                    "title": "Article title 2",
                    "body": "Article body 2",
                    "author_id": 1,
                    "created_at": "2017-08-14T17:17:33.010Z",
                    "updated_at": "2017-08-14T17:17:33.010Z",
                    "deleted_at": "2017-08-14T17:17:33.010Z"
                },
                {
                    "id": 3,
                    "title": "Article title 3",
                    "body": "Article body 3",
                    "author_id": 2,
                    "created_at": "2017-09-14T17:17:33.010Z",
                    "updated_at": "2017-09-14T17:17:33.010Z",
                    "deleted_at": null
                },
                {
                    "id": 4,
                    "title": "Article title 4",
                    "body": "Article body 4",
                    "author_id": 1,
                    "created_at": "2017-10-14T17:17:33.010Z",
                    "updated_at": null,
                    "deleted_at": null
                }
            ],
            authors: [
                {
                    "id": 1,
                    "first_name": "Jeanette",
                    "last_name": "Penddreth",
                    "pwd": 12345,
                    "email": "jpenddreth0@census.gov",
                    "gender": "Female",
                    "ip_address": "26.58.193.2"
                },
                {
                    "id": 2,
                    "first_name": "Giavani",
                    "last_name": "Frediani",
                    "pwd": 54321,
                    "email": "gfrediani1@senate.gov",
                    "gender": "Male",
                    "ip_address": "229.179.4.212"
                }
            ]
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.token != null;
        },
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('auth_token', token);
        },
        logout(state) {
            state.token = null;
            state.user = {};
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
        },
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        addArticle(state, article) {
            state.articles.push(article);
        },
        updateArticle(state, article) {
            const index = state.articles.findIndex((item, i) => {
                return item.id === article.id;
            });

            article.updated_at = new Date().toDateString();

            state.articles = [
                ...state.articles.slice(0, index),
                article,
                ...state.articles.slice(index + 1)
            ]
        },
        deleteArticle(state, id) {
            const index = state.articles.findIndex(item => item.id === id);
            if (index !== -1) {
                state.articles.splice(index, 1);
            }
        },
    }
})

export default store