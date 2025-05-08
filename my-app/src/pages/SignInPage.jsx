import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import { MySignInScreen }from '../components/UserAuth.jsx';

export function SignInPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <MySignInScreen />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}