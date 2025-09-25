// app/users/[userId]/page.tsx

import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!response.ok) {
    return null;
  }
  const user = await response.json();
  return user;
}

export default async function UserPage({ params }: { params: { userId: string } }) {
  const { userId } = params;
  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <div>ini halaman user page akh</div>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
        {user.website}
      </a>
    </div>
  );
}
