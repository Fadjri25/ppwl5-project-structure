import type { User } from "../types/user.types";

export const userView = (users: User[]) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplikasi Clean Architecture</title>
    <link href="/css/style.css" rel="stylesheet">
  </head>
  <body class="p-8 font-sans">
      <h1 class="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      
      <form action="/create" method="POST" class="mb-6 flex gap-2">
        <input type="text" name="name" placeholder="Nama User" class="border p-2 rounded" required>
        <input type="text" name="role" placeholder="Role (cth: Admin)" class="border p-2 rounded" required>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Tambah User</button>
      </form>

      <ul class="space-y-2">
          ${users.map(u => `
            <li class="flex items-center justify-between border p-3 rounded">
              <span><strong>${u.name}</strong> - ${u.role}</span>
              <form action="/delete/${u.id}" method="POST" class="inline">
                <button type="submit" class="bg-red-500 text-white px-3 py-1 rounded text-sm">Hapus</button>
              </form>
            </li>
          `).join('')}
      </ul>
  </body>
  </html>
`;