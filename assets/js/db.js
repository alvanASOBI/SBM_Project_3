export function addUserToDatabase(userId, email, password) {
    const userDocRef = doc(collection(window.db, "users"), userId);
    return setDoc(userDocRef, {
        email: email,
        password: password,
        createdAt: new Date()
    });
}
