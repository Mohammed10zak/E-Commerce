import { useAuthContext } from "../context/AuthContext";
import { LogoutBtn, LogoutImg } from "./style";
import logoutimg from "../Images/logout.png";

const LogOut = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <LogoutBtn onClick={logout}>
        Log Out
        <LogoutImg src={logoutimg} alt="logout" />
      </LogoutBtn>
    </div>
  );
};

export default LogOut;
