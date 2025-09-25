async function fetchDataJoke(id: string) {
  const response = await fetch(`https://v2.jokeapi.dev/joke/any?idRange=${id}`)
  const dataJoke = await response.json()
  return dataJoke
}

export default async function CandaanYgTersortir(
    {params}:{params:Promise<{jokeId:string}>}
 ){
  const {jokeId} =await params
  const informasiJoke = await fetchDataJoke(jokeId)

  return (
    // <div>
      // <h1>{informasiJoke.category}</h1>
      // <h1>candaan tak bertanya jawab:</h1>
      // <h1>pertanyaan candaan:</h1>
      // <h1>jawaban candaan:</h1>
      // <h1>{informasiJoke.setup}</h1>
      // <h1>{informasiJoke.joke}</h1>
    // </div>
    <div>
      {informasiJoke.type === "single" ? (
        <h1>candaan taak bertanya jawab: {informasiJoke.joke}</h1>):(
        <div>
          <h1>pertanyaan candaan: {informasiJoke.setup}</h1>
          <h1>jawaban candaan: {informasiJoke.delivery}</h1>
        </div>
      )}
        
      
    </div>
  )
}
