import config from '../config';
import TokenService from './token-service';

const SnippetApiService = {
  getSnippets() {
    return fetch(`${config.API_ENDPOINT}/snippets`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getSnippet(snippet_id) {
    return fetch(`${config.API_ENDPOINT}/snippet/${snippet_id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getProject(project_id) {
    return fetch(`${config.API_ENDPOINT}/snippet/${project_id}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postSnippet(snippet) {
    return fetch(`${config.API_ENDPOINT}/snippets`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        snippet
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postProject(title) {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        title,
        user_id: 1
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default SnippetApiService;
