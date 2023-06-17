import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "./UserData";
import { UserCard } from "./Card";

export const UserCardList = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();
  
    // Handle the user card click
    const handleClick = (userId) => {
      const state = { scrollPosition };
      const url = `/user-detail/${userId}`;
      navigate(url, { state });
    };
  
    // Restore the previous state when navigating back
    useEffect(() => {
      const handleBackNavigation = (event) => {
        const state = event.state;
        if (state && state.scrollPosition) {
          setScrollPosition(state.scrollPosition);
        }
      };
  
      window.addEventListener('popstate', handleBackNavigation);
  
      return () => {
        window.removeEventListener('popstate', handleBackNavigation);
      };
    }, []);
  
    return (
      <div
      style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"10px"
      }}
      >
        {users.map((user) => (
          <UserCard
            user={user}
            key={user.id}
            userId={user.id}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  };
  