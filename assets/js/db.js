export function addUserToDatabase(userId, username, email, password) {
    const userDocRef = doc(collection(window.db, "users"), userId);
    return setDoc(userDocRef, {
        username: username,
        email: email,
        password: password,
        createdAt: new Date()
    });
}
