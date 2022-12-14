import React from "react";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import api from "../../services/api";
import "./Login.css";
import { login, setSession, setUserId } from "../../services/auth";
import { LoginContext } from "../../Context/LoginContext";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();
  // const[id, setId] = useState();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      console.log(email, password);
      console.log(response);
      setUser(response.data);
      setUserId(response.data.user[0].user_id);
      alert("Bem vindo");
      setSession(email);
      login(response.data.AccessToken);
      navigate("/profile");
    } catch (error) {
      console.warn(error);
      alert(error.message);
    }
  }
  return (
    <div className="loginPage">
      <Header />
      <div className="baseLogin">
        <div className="loginBox">
          <div className="containerLogin">
            <img src="/images/login_icon.png" alt="Login icon"></img>
            <p></p>
            <Form className="inputs">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="rei_da_polenta@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="eu_amo_polenta"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
            <p></p>
            <p></p>
            <Button className="btn-custom" variant="flat" onClick={handleLogin}>
              Entrar
            </Button>{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
