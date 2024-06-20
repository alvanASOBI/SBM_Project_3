export function addUserToDatabase(userId, email, password) {
    const userDocRef = doc(collection(window.db, "users"), userId);
    return setDoc(userDocRef, {
        email: email,
        password: password, // Note: Storing plain text passwords is not secure
        createdAt: new Date()
    });
}
