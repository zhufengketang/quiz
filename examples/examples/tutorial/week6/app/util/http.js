import {path_join} from "util"
import qs from 'qs'

function http_factory(method, options) {

  return (url, params) => {
    url = path_join(SERVICE_BASE, url)
    const options = {
      method,
      headers : {
        Accept: 'application/json'
      }
    }

    if(method === 'GET') {
      const query = qs.stringify(params)
      if(query) {
        url += "?" + query
      }
    } else {
      options.body = JSON.stringify(params)
    }

    return fetch(url, options)
      .then(response => {
        return response.json()
      })
      .catch(error => {
        throw {errorMessage : "网络错误，请重试"}
      })
      .then(json => {
        if(json.errorMessage) {
          throw json
        }else {
          return json.data
        }
      })

  }


}

export const http_get = http_factory("GET")
export const http_post = http_factory("POST")
export const http_put = http_factory("PUT")
export const http_delete = http_factory("DELETE")
