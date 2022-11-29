/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const res=await fetch("http://localhost:1337/api/imtaks")
    const item=await res.json()
    return item
  }