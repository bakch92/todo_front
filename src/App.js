import './App.css';
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';
import { useEffect, useState } from 'react';
import { Paper, List, Toolbar, AppBar, Grid, Typography, Button } from "@mui/material";
import { call } from './ApiService';
import { signout } from './ApiService';

function App() {

  let [items, modItems] = useState([]);
  let [stateCount, modCount] = useState(0);
  let [loading, modLoading] = useState(true);

  useEffect(() => {
    call("/todo", "GET", null).then(data => {
      modItems(data.todoData);
      modLoading(false);
    })
  }, []);

  useEffect(() => {
    call("/todo", "GET", null).then(data => {
      modItems(data.todoData);
    })
  }, [stateCount]);

  const add = (item) => {
    item.done = false;
    call("/todo", "POST", item).then(data => {
    })
    modCount(stateCount + 1);
  }

  const del = (item) => {
    call("/todo/" + item.id, "DELETE", null).then(response => {
      window.location.reload();
      modCount(stateCount + 1);
    })
  }

  const update = (item) => {
    call("/todo/" + item.id, "PATCH", item).then(response => {
      modItems(response.todoData);
      modCount(stateCount + 1);
    })
  }

  let todoItems = (<div>
    <AddTodo add={add} />
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((a, i) => (
          <div key={i}>
            <Todo item={a} del={del} update={update} />
          </div>
        ))}
      </List>
    </Paper></div>);

  let navigationBar = (<div>
    <AppBar position='static'>
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant='h6'>오늘의 할일</Typography>
          </Grid>
          <Grid>
            <Button color='inherit' onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>);

  let todoListPage = (
    <div>
      {navigationBar}
      {todoItems}
    </div>
  );

  let loadingPage = (<h1>로딩중...</h1>);

  let content = loadingPage;

  if (!loading) {
    content = todoListPage;
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
