import { Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { signin } from "../ApiService";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get("email");
        const password = data.get("password");
        if(email === "" | password === "") {
            alert("필수 항목을 입력하지 않았습니다.");
            return;
        }
        signin({email: email, password: password})
    }

    return (
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        placeholder="이메일을 입력해주세요."
                        fullWidth
                        id="email"
                        label="이메일 주소"
                        type="email"
                        name="email"
                        autoComplete="email"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="패스워드"
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        name="password"
                        autoComplete="current-password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">로그인</Button>
                    </Grid>
                    <Link href="/signup" variant="body2">
                        <Grid item>계정이 없습니까? 여기서 가입 하세요.</Grid>
                    </Link>
                </Grid>
            </form>
        </Container>
    )
}

export default Login;