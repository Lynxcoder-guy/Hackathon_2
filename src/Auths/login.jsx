import { Link } from 'react-router-dom';

export default function UserLogin() {
  return (
    <main>
      <h1>Masuk ke akun Anda</h1>
      <form>
        <div>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="login-password">Kata sandi</label>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">Masuk</button>
      </form>

      <p>
        Belum punya akun? <Link to="/register">Daftar</Link>
      </p>
    </main>
  );
}
