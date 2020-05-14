export default function ChampionTab(champion) {
  return /*html*/`
    <div>${champion.name}</div>
    <img src="../assets/images/${champion.imagePath}">
  `

  //Todo: Iterate over JSON data and use image name to reference the local images
}

