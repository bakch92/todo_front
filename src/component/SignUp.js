import { Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { signin, signup } from "../ApiService";

const SignUp = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const userName = data.get("username");
        const email = data.get("email");
        const password = data.get("password");

        if(userName === '' | email === '' | password === '') {
            alert("필수 항목이 입력되지 않았습니다.");
            return;
        }

        signup({
            email: email,
            username: userName,
            password: password
        }).then(
            () => signin({
                email: email,
                password: password
            })
        ).catch(
            error => console.log(error)
        )
    }

    return(
        <div>
        <Container component="main" maxWidth="xs" style={{marginTop: "8%"}}>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h1" variant="h5">
                            계정 생성
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="fname"
                        name="username"
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="사용자 이름"
                        autoFocus />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        type="email"
                        label="이메일 주소"
                        autoComplete="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        name="password"
                        variant="outlined"
                        type="password"
                        required
                        fullWidth
                        id="password"
                        label="비밀번호"
                        autoComplete="current-password" />
                    </Grid>
                    <Grid item={12}>
                        <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary" >계정 생성</Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            이미 계정이 있습니까? 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </div>
    )
}

export default SignUp;