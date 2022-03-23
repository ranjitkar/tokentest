/* Moralis init code */
const serverUrl = "https://2pnsuljnqf1g.usemoralis.com:2053/server";
const appId = "l7nf2CiwqeWDOR2Qy63XAHDoOnkh6w8x8uTDxxw3";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}
async function play(){
    const balance=await Moralis.Web3.getAllERC20({address:"0x6bd43b3c5b8197c8d3bcffb1e48d212c847e9497"});
    console.log(balance);
    console.log("here");
}
play();
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;