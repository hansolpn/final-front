import React, { useState } from 'react';

// 새로운 전역 컨텍스트 생성
const AuthContext = React.createContext({
  isLoggedIn: false, // 로그인 했는지의 여부 추적
  userName: '',
  userAddress: '',
  userRole: '',
  onLogout: () => {},
  onLogin: (token, userName, address, role, userId) => {},
});

// 로그인 한 유저의 데이터 객체를 반환하는 함수
export const getLoginUserInfo = () => {
  return {
    token: localStorage.getItem('LOGIN_TOKEN'),
    username: localStorage.getItem('LOGIN_USERNAME'),
    userid: localStorage.getItem('LOGIN_USERID'),
    useraddress: localStorage.getItem('LOGIN_USERADDRESS'),
    role: localStorage.getItem('LOGIN_ROLE'),
  };
};

// 위에서 생성한 Context를 제공할 수 있는 provider
// 이 컴포넌트를 통해 자식 컴포넌트에게 인증 상태와 관련된 함수들을 전달할 수 있음.
export const AuthContextProvider = (props) => {
  const { token, username, useraddress, role, userid } = getLoginUserInfo();
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [userName, setUserName] = useState(username ? username : '');
  const [userId, setUserId] = useState(userid ? userid : '');
  const [userAddress, setUserAddress] = useState(
    useraddress ? useraddress : ''
  );
  const [userRole, setUserRole] = useState(role ? role : '');

  // 로그아웃 핸들러
  const logoutHandler = () => {
    localStorage.clear(); // 로컬스토리지 내용 전체 삭제
    setIsLoggedIn(false);
    setUserName('');
    setUserRole('');
  };

  // 로그인 핸들러
  const loginHandler = (token, userName, address, role, userId) => {
    localStorage.setItem('isLoggedIn', '1');
    //json에 담긴 인증정보를 클라이언트에 보관
    // 1. 로컬 스토리지 - 브라우저가 종료되어도 보관됨.
    // 2. 세션 스토리지 - 브라우저가 종료되면 사라짐.
    localStorage.setItem('LOGIN_TOKEN', token);
    localStorage.setItem('LOGIN_USERNAME', userName);
    localStorage.setItem('LOGIN_USERADDRESS', address);
    localStorage.setItem('LOGIN_ROLE', role);
    localStorage.setItem('LOGIN_USERID', userId);
    setIsLoggedIn(true);
    setUserName(userName);
    setUserAddress(address);
    setUserRole(role);
    setUserId(userId);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        userAddress,
        userRole,
        userId,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
