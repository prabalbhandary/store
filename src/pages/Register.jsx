import React from 'react';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <header className="card-header">
              <h4 className="card-title mt-2">Register</h4>
            </header>
            <article className="card-body">
              <form onSubmit={handleRegister}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group" style={{ marginTop: '1rem' }}>
                  <button type="submit" className="btn btn-primary btn-block">Register</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
