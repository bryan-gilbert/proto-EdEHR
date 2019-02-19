export function getIncomingParams() {
  let search = window.location.search.substring(1)
  let params2 = {}
  let parts = search.split('&')
  parts.forEach(p => {
    let pair = p.split('=')
    params2[pair[0]] = decodeURIComponent(pair[1])
  })
  return parts
}
