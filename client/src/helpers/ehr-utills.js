export function getIncomingParams() {
  let search = window.location.search.substring(1)
  let params2 = {}
  let parts = search.split('&')
  parts.forEach(p => {
    let pair = p.split('=')
    params2[pair[0]] = decodeURIComponent(pair[1])
  })
  return params2
}

export function composeUrl(context, api) {
  let visitState = context.rootState.visit
  let apiUrl = visitState.apiUrl
  return `${apiUrl}/${api}/`
}

export function composeAxiosResponseError(error, msg) {
  msg += error.response.status ? ` status: ${error.response.status}` : ''
  msg += error.response.statusText ? ` ${error.response.statusText}` : ''
  msg += error.response.data ? ` ${error.response.data}` : error.message
  return msg
}