import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UsersPage";
import UserItemPage from "./components/UserItemPage";

function App() {
	return (
		<BrowserRouter>
			<div>
        <div>
          <Link to="/users">Пользователи</Link>
          <Link to="/todos">Задачи</Link>
        </div>
        <Routes>
        <Route path="/users" element={<UserPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/users/:id" element={<UserItemPage/>}/>
            <Route path="/todos/:id" element={<TodoItemPage/>}/>
            <Route path="*" element={<div>NotFound</div>}/>
        </Routes>
      </div>
		</BrowserRouter>
	);
}

export default App;
// <EventsExample />
// <Card variant={CardVariant.outlined} width='280px' height='280px'>
// 	<button>Click</button>
// </Card>
