import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

const MOCK_USER = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  orderHistory: [
    {
      orderId: "A123",
      date: "2025-05-01",
      total: 120,
      items: [
        { id: 3, name: "Vegan Makeup Brush Set", quantity: 1 },
        { id: 5, name: "Silicone Beauty Sponge", quantity: 2 },
      ],
    },
  ],
};

export function UserProvider({ children }) {
  const [user, setUser] = useState(MOCK_USER);

  // For now, user is hardcoded. You can expand for login later.

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
