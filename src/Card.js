 export const UserCard = ({user, userId, handleClick }) => {
    return (
      <div style={{
        border:"1px solid red",
        width:"300px",
        height:"300px",
      }} onClick={() => handleClick(userId)}>
       <p>{user?.name}</p>
       <p>{user?.age}</p>
       <p>{user?.email}</p>
      </div>
    );
  };