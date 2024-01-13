import axios from 'axios';

export const Service = {
  ErrorHandler(err) {
    console.log(err);
  },

  async SignUp(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/register',
          {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            phone: newUser.phone,
            role: newUser.role,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          localStorage.setItem('message', JSON.stringify(res.data.message));
          window.location.reload();
        });
    } catch (e) {
      this.ErrorHandler(e);
    }
  },
  async Login(newUser) {
    try {
      await axios
        .post(
          'http://localhost:5000/api/auth/login',
          {
            username: newUser.username,
            password: newUser.password,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          window.location.reload();
        });
    } catch (e) {
      this.ErrorHandler(e);
    }
  },
};
