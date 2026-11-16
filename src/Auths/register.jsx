import { Link } from 'react-router-dom';

export default function UserRegister() {
  return (
    <main>
      <h1>Buat akun</h1>
      <form>
        <div>
          <label htmlFor="register-name">Nama</label>
          <input
            id="register-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor="register-password">Kata sandi</label>
          <input
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        <div>
          <label htmlFor="register-confirm-password">Konfirmasi kata sandi</label>
          <input
            id="register-confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        <button type="submit">Daftar</button>
      </form>

      <p>
        Sudah punya akun? <Link to="/login">Masuk</Link>
      </p>
    </main>
  );
}
