import appview from '../utils/appview.js'
import fetchData from '../utils/fetchData.js'
import ChampionTab from '../components/ChampionTab.js'

export default async function Home() {
  let formattedData = await fetchData()
  appview.innerHTML = /*html*/ `
  <div>
    ${formattedData.map(data => ChampionTab(data)).join('')}
  </div>
  `
}
/*
${formattedData.map((data) => {
      ChampionTab()
      console.log(data.name)
    })}
*/