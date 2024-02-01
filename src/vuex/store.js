import { createStore } from 'vuex'
import api from "@/api/api.js";

const store = createStore({
    state () {
        return {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem('auth_token') || null,
            admins: [],
            articles: [],
            authors: []
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
    actions: {
        async getAdmins({ commit, state }) {
            if (!state.admins.length) {
                try {
                    const response = await api.getAdmins();
                    commit('setAdmins', response.data);
                } catch (error) {
                    console.error('Error fetching admins:', error);
                }
            }
        },
        async getAuthors({ commit, state }) {
            if (!state.authors.length) {
                try {
                    const response = await api.getAuthors();
                    commit('setAuthors', response.data);
                } catch (error) {
                    console.error('Error fetching authors:', error);
                }
            }
        },
        async getArticles({ commit, state }) {
            if (!state.articles.length) {
                try {
                    const response = await api.getArticles();
                    commit('setArticles', response.data);
                } catch (error) {
                    console.error('Error fetching articles:', error);
                }
            }
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
        setAdmins(state, admins) {
            state.admins = admins;
        },
        setAuthors(state, authors) {
            state.authors = authors;
        },
        setArticles(state, articles) {
            state.articles = articles;
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