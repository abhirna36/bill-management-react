export function getNewPassword(username) {
    return username.split("@")[0][0].toUpperCase()+username.split("@")[0].substring(1)+"@1234";
}