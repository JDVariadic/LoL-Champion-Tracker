import baseUrl from './baseUrl.js'
import formatData from './formatData.js'

export default async function fetchData() {
  const riotResponse = await fetch(`${baseUrl}`)
  
  let formattedData = formatData(riotResponse.json())
  return formattedData
}