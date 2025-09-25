import Bedil from "./button";
type post = {
  id:number
 title:string 
 body:string
}
export default async function Neymarjs() {
  console.log("di kirim dari halaman kontak, ini client / server component?")
// response = mentahan dari api dr db 
// await sintaks u/ 
// fetch itu u/ narik mentahan ny aja , blm dlm bentuk json yg rapi
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts:post[] = await response.json()
  console.log(posts)

  return (
    <div>
      {/* ciri-ciri komponen modular 1 tag saja */}
      <Bedil />
      <div>halaman contact disini</div>
      <h1>Post Title List</h1>
      <ul>
        {/* post itu adalah sebuah method  */}
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
