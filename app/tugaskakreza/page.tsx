type CatFact = {
  fact: string
  length: number
}

async function fetchCatFacts(): Promise<CatFact[]> {
  const res = await fetch("https://catfact.ninja/facts?limit=10", {
    cache: "no-store",
  })

  if (!res.ok) return []

  const data = await res.json()
  return data.data
}

export default async function CatFactsPage() {
  const facts = await fetchCatFacts()

  return (
    <div>
      <h1>10 Cat Facts</h1>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>
            {fact.fact}
          </li>
        ))}
      </ul>
    </div>
  )
}