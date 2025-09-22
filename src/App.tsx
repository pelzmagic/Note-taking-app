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
import ArchivedNote from "./pages/archived-note";
import ArchivedDetails from "./pages/archived-details";
import Tags from "./pages/tags";
import TagNote from "./pages/tag-note";
import SearchNote from "./pages/search-note";
import Settings from "./pages/settings";
import Theme from "./pages/theme";
import FontOptions from "./pages/font-options";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ChangePassword from "./pages/change-password";

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



  const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/forgotten-password", element: <ForgottenPassword /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/signup", element: session ? <Notes /> : <SignUp /> },
    { path: "/details", element: <Details session={session} /> },
    { path: "/archived", element: <ArchivedNote /> },
    { path: "/archived-details", element: <ArchivedDetails /> },
    { path: "/tags", element: <Tags /> },
    { path: "/tag-note", element: <TagNote /> },
    { path: "/search", element: <SearchNote /> },
    { path: "/settings", element: <Settings /> },
    { path: "/theme", element: <Theme /> },
    { path: "/font-options", element: <FontOptions /> },
    { path: "/change-password", element: <ChangePassword /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}
