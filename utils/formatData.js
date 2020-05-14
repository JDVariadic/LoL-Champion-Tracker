export default async function formatData(data) {
  const rawData = await data
  let championArray = []
  for (let key in rawData.data) {
    championArray.push([key, rawData.data[key]])
  }
  console.log(championArray)

  let filteredChampionData = []
  championArray.forEach(championObject => {
    filteredChampionData = [...filteredChampionData, makeChampionObject(championObject[1])]
  })

  return filteredChampionData
}

export function makeChampionObject(championData){
  return {
    'name': championData.id,
    'imagePath': championData.image.full,
  }
}