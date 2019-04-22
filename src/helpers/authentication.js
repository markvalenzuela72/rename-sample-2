function isLoggedIn(){
  return localStorage.getItem("token") !== null;
}
function userLogout(){
  localStorage.removeItem("token");
  localStorage.removeItem("name");``
}
function saveUser({token, name}){
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
}
function getToken(){
  if (isLoggedIn()){
    return localStorage.getItem("token");
  }
}
function userInfo(){
  if (localStorage.getItem("name") !== null){
    return {
      full_name: localStorage.getItem("name")
    }
  }
  return null;
  
}
export {
  isLoggedIn,
  saveUser,
  userInfo,
  userLogout,
  getToken
}