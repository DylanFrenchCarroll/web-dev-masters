import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { MoviesContext } from "./contexts/moviesContext";
import { retrieveFavourites } from "./util";

const firebaseConfig = {
  apiKey: "AIzaSyA3b2xP8MbgZzGAunZqlPGj5mXpI7mOzi4",
  authDomain: "web-dev-project-e1c58.firebaseapp.com",
  projectId: "web-dev-project-e1c58",
  databaseURL:
    "https://web-dev-project-e1c58-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "web-dev-project-e1c58.appspot.com",
  messagingSenderId: "923746676432",
  appId: "1:923746676432:web:847268ff7877153fec78d5",
  measurementId: "G-JJ25GBRSPN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Helpers
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
    localStorage.setItem("authUser", JSON.stringify(user));
    let ids = await retrieveFavouritesDB(user).then((resp) => {
      return resp.favouriteMovies;
    });
    if (ids === undefined) {
      let temp = [];
      localStorage.setItem("favourites", JSON.stringify(temp));
    } else {
      localStorage.setItem("favourites", JSON.stringify(ids));
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      async (resp) => {
        localStorage.setItem("authUser", JSON.stringify(resp.user));
        console.log(resp)
        console.log(resp.user.accessToken)
        let ids = await retrieveFavouritesDB(resp.user).then((resp) => {
          return resp.favouriteMovies;
        });
        if (ids === undefined) {
          let temp = [];
          localStorage.setItem("favourites", JSON.stringify(temp));
        } else {
          localStorage.setItem("favourites", JSON.stringify(ids));
        }
      }
    );
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  localStorage.removeItem("favourites", null);
  localStorage.removeItem("authUser", null);

  signOut(auth)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const writeToFavouritesDB = async (user, id) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);

  let docId;
  querySnapshot.forEach(async (doc) => {
    docId = doc.id;
  });

  const ref = doc(db, "users", docId);
  await updateDoc(ref, {
    favouriteMovies: arrayUnion(id),
  });
};

const removeFromFavouritesDB = async (user, id) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);

  let docId;
  querySnapshot.forEach(async (doc) => {
    docId = doc.id;
  });

  const ref = doc(db, "users", docId);

  console.log("remove from favourites");
  await updateDoc(ref, {
    favouriteMovies: arrayRemove(id),
  });
};

const retrieveFavouritesDB = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);
  let data;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
};

const writeToFantasyDB = async (user, movie) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);

  let docId;
  querySnapshot.forEach(async (doc) => {
    docId = doc.id;
  });

  const ref = doc(db, "users", docId);
  await updateDoc(ref, {
    fantasyMovies: arrayUnion(movie),
  });
};

const retrieveFantasyDB = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  const querySnapshot = await getDocs(q);
  let data;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data.fantasyMovies ?? [];
};

export {
  app,
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  writeToFavouritesDB,
  retrieveFavouritesDB,
  removeFromFavouritesDB,
  writeToFantasyDB,
  retrieveFantasyDB,
};
