import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabase-client";
import Login from "./pages/login";
import ForgottenPassword from "./pages/forgotten-password";
import ResetPassword from "./pages/reset-password";
import SignUp from "./pages/signup";
import type { Session } from "@supabase/supabase-js";
import { Toaster } from "sonner";
import Notes from "./pages/notes";
import Details from "./pages/details";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // const logout = async () => {
  //   await supabase.auth.signOut();
  // };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={session ? <Notes /> : <SignUp />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </>
  );
}
