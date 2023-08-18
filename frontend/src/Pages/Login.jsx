import { Form, redirect } from "react-router-dom";

export default function Login() {
  return (
    <Form method="POST" action="/login">
        <input type="text" name="credentials"/>
        <input type="password" name="password"/>
        <button type="submit">Login</button>
    </Form>
  )
}

export const loginUser = async ({ request }) => {
    
    // const data = await request.formData();

    // const {credentials, password} = {
    //     credentials: data.get('credentials'),
    //     password: data.get('password')
    // }

    // console.log(credentials, password);

    // const res = await fetch('/api/auth/login', {
    //     method:"POST",
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({credentials, password})
    // });

    // console.log(res);

    // const json = await res.json();

    // console.log(json);

    return redirect('/login')
}
