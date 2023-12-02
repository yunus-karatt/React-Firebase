import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAInJzSnVF6jOKqmbwwCbAMUQI5HNkDCJ4",
  authDomain: "react-demo-9d88a.firebaseapp.com",
  projectId: "react-demo-9d88a",
  storageBucket: "react-demo-9d88a.appspot.com",
  messagingSenderId: "996609455542",
  appId: "1:996609455542:web:a3febf73c96971a6407d17",
  measurementId: "G-4T987NLTTJ"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
