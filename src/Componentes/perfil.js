import React,{useContext} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { User_context } from "./User_context";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const user_context_provider = useContext(User_context);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(isAuthenticated){
    user_context_provider.Set_user(user);
    console.log(user_context_provider.User);
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;