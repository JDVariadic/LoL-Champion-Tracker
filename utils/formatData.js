export default async function formatData(data) {
  const rawData = await data
  let championArray = []
  for (let key in rawData.data) {
    championArray.push([key, rawData.data[key]])
  }
  return championArray
}