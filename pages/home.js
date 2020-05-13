import appview from '../utils/appview.js'
import baseUrl from '../utils/baseUrl.js'
import fetchData from '../utils/fetchData.js'

export default async function Home() {
  let formattedData = await fetchData()
  console.log(formattedData)
  appview.innerHTML =/*html*/ `
  
  
  `
}
