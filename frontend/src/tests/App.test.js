import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Login from "../Components/Login";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Register from "../Components/Register";
import userEvent from "@testing-library/user-event";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let  store = mockStore({});
const queryClient = new QueryClient();

test("renders_login_component", () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
  const linkElement = screen.getByText(/Login/i, { selector: "h2" });
  expect(linkElement).toBeInTheDocument();
});

test("renders_email_input", () => {
  render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
  );
  const emailInput = screen.getByPlaceholderText(/Email/i);
  expect(emailInput).toBeInTheDocument();
});

test("renders_password_input", () => {
  render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
  );
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("renders_login_button", () => {
  render(
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
  );
  const loginButton = screen.getByRole("button", { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});

test("renders_signup_link", () => {
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
  const signupLink = screen.getByText(/Signup/i);
  expect(signupLink).toBeInTheDocument();
});

test('displays_email_required_error_when_email_is_empty', async () => {
    render(
        <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
  });
  
  test('displays_invalid_email_error_when_email_is_invalid', async () => {
    render(
        <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText(/Email/i), { target: { value: 'invalid_email' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument();
  });
  
  test('displays_password_required_error_when_password_is_empty', async () => {
    render(
        <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
  });
  
  test('displays_password_length_error_when_password_is_too_short', async () => {
    render(
        <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
    );
    fireEvent.input(screen.getByPlaceholderText(/Password/i), { target: { value: '12345' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
    expect(await screen.findByText('Password must be at least 6 characters')).toBeInTheDocument();
  });

  test('updates_first_name_field_correctly', () => {
    render( <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Register />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>);
    
    userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    expect(screen.getByLabelText(/First Name/i).value).toBe('John');
  });
