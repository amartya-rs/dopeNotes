import "./landing-page.css";
import { heroImage } from "../../assets/image";
import { useAuth } from "../../context/auth-context";

const LandingPage = () => {
   const { authDispatch } = useAuth();

   return (
      <main className="landing-page">
         <section className="content-wrapper">
            <h5 className="mt-2">Meet your modern</h5>
            <h4>Note taking app</h4>.
            <p className="p-xlg">
               Manage your daily tasks and workflow in a modern way and boost
               your efficiency without any efforts.
            </p>
            <button
               className="button primary"
               onClick={() =>
                  authDispatch({
                     type: "TOGGLE_MODAL",
                     payload: [true, "signup"],
                  })
               }
            >
               Join Now
            </button>
            <h6
               className="font-semibold"
               onClick={() =>
                  authDispatch({
                     type: "TOGGLE_MODAL",
                     payload: [true, "login"],
                  })
               }
            >
               Already have an account?
            </h6>
            .
         </section>
         <section className="image-wrapper">
            <img src={heroImage} alt="hero image" />
         </section>
      </main>
   );
};

export { LandingPage };
