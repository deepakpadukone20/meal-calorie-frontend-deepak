export async function getCalories(dishName: string, servings: number) {
  const token = localStorage.getItem('token');
  const res = await fetch("http://localhost:8000/get-calories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify({ dishName, servings })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to fetch calorie data");
  return data;
}

export async function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const res = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to register user");
  return data;
}
