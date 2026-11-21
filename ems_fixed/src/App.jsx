import { useEffect, useMemo, useState } from "react";
import "./App.css";

const seedEmployees = [
  {
    id: 1,
    name: "Arjun",
    email: "e@e.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 101,
        title: "Design Login Page",
        description: "Create a responsive login page using React.",
        date: "2026-11-25",
        category: "Development",
        status: "new",
      },
      {
        id: 102,
        title: "Fix Navbar Bug",
        description: "Fix the navigation bar alignment issue.",
        date: "2026-11-23",
        category: "Bug Fix",
        status: "active",
      },
      {
        id: 103,
        title: "Write Documentation",
        description: "Document the login page components.",
        date: "2026-11-20",
        category: "Documentation",
        status: "completed",
      },
    ],
  },
  {
    id: 2,
    name: "Rahul",
    email: "employee2@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 201,
        title: "Create Dashboard",
        description: "Build the employee dashboard UI.",
        date: "2026-11-26",
        category: "Development",
        status: "new",
      },
      {
        id: 202,
        title: "Update CSS",
        description: "Improve dashboard styling and responsiveness.",
        date: "2026-11-24",
        category: "Design",
        status: "active",
      },
    ],
  },
  {
    id: 3,
    name: "Aman",
    email: "employee3@example.com",
    password: "123",
    role: "employee",
    tasks: [
      {
        id: 301,
        title: "Build Registration Form",
        description: "Create a registration form with validation.",
        date: "2026-11-27",
        category: "Development",
        status: "new",
      },
    ],
  },
  {
    id: 4,
    name: "Rohit",
    email: "employee4@example.com",
    password: "123",
    role: "employee",
    tasks: [],
  },
  {
    id: 5,
    name: "Vikram",
    email: "employee5@example.com",
    password: "123",
    role: "employee",
    tasks: [],
  },
];
const seedAdmin = {
  id: 1,
  name: "Admin",
  email: "admin@example.com",
  password: "123",
  role: "admin",
};
const read = (key, fallback) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
};
const countTasks = (tasks = []) => ({
  newTask: tasks.filter((t) => t.status === "new").length,
  active: tasks.filter((t) => t.status === "active").length,
  completed: tasks.filter((t) => t.status === "completed").length,
  failed: tasks.filter((t) => t.status === "failed").length,
});
const today = () => new Date().toISOString().slice(0, 10);

function App() {
  const [employees, setEmployees] = useState(() =>
    read("ems_employees", seedEmployees),
  );
  const [admin] = useState(() => read("ems_admin", seedAdmin));
  const [session, setSession] = useState(() => read("ems_session", null));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(
    () => localStorage.setItem("ems_employees", JSON.stringify(employees)),
    [employees],
  );
  useEffect(
    () => localStorage.setItem("ems_admin", JSON.stringify(admin)),
    [admin],
  );
  useEffect(() => {
    if (session) localStorage.setItem("ems_session", JSON.stringify(session));
    else localStorage.removeItem("ems_session");
  }, [session]);

  const currentEmployee =
    session?.role === "employee"
      ? employees.find((e) => e.id === session.id)
      : null;
  const login = (e) => {
    e.preventDefault();
    const person = [admin, ...employees].find(
      (p) =>
        p.email.toLowerCase() === email.trim().toLowerCase() &&
        p.password === password,
    );
    if (!person) {
      setLoginError("Email ya password sahi nahi hai.");
      return;
    }
    setLoginError("");
    setSession({ id: person.id, role: person.role });
    setPassword("");
  };
  const logout = () => setSession(null);

  const createTask = (task) =>
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === task.assigneeId
          ? {
              ...emp,
              tasks: [
                ...emp.tasks,
                { ...task, id: Date.now(), status: "new", createdAt: today() },
              ],
            }
          : emp,
      ),
    );
  const updateTask = (employeeId, taskId, status) =>
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: emp.tasks.map((t) =>
                t.id === taskId ? { ...t, status } : t,
              ),
            }
          : emp,
      ),
    );
  const deleteTask = (employeeId, taskId) =>
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? { ...emp, tasks: emp.tasks.filter((t) => t.id !== taskId) }
          : emp,
      ),
    );

  if (!session)
    return (
      <main className="login-screen">
        <form className="login-card" onSubmit={login}>
          <div className="brand-mark">EMS</div>
          <p className="eyebrow">EMPLOYEE MANAGEMENT</p>
          <h1>Welcome back</h1>
          <p className="muted">Sign in to manage your work and team.</p>
          <label>
            Email address
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </label>
          {loginError && <p className="error">{loginError}</p>}
          <button className="primary full">Sign in</button>
          <div className="demo-box">
            <b>Demo accounts</b>
            <span>Admin: admin@example.com / 123</span>
            <span>Employee: e@e.com / 123</span>
          </div>
        </form>
      </main>
    );

  return session.role === "admin" ? (
    <AdminView
      admin={admin}
      employees={employees}
      onLogout={logout}
      onCreate={createTask}
      onDelete={deleteTask}
    />
  ) : currentEmployee ? (
    <EmployeeView
      employee={currentEmployee}
      onLogout={logout}
      onUpdate={updateTask}
    />
  ) : (
    <main className="login-screen">
      <div className="login-card">
        <h2>Account unavailable</h2>
        <button className="primary" onClick={logout}>
          Return to login
        </button>
      </div>
    </main>
  );
}

function Shell({ title, subtitle, name, onLogout, children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark small">EMS</div>
          <div>
            <b>WorkSpace</b>
            <span>TEAM MANAGEMENT</span>
          </div>
        </div>
        <div className="user-area">
          <div className="avatar">{name?.[0]}</div>
          <div className="user-label">
            <b>{name}</b>
            <span>{title}</span>
          </div>
          <button className="ghost" onClick={onLogout}>
            Log out ↗
          </button>
        </div>
      </header>
      <main className="content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">{subtitle}</p>
            <h1>{title}</h1>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
function StatCards({ stats }) {
  const cards = [
    ["Total tasks", stats.total, "All assigned work", "violet"],
    ["New", stats.newTask, "Awaiting acceptance", "blue"],
    ["In progress", stats.active, "Currently working", "amber"],
    ["Completed", stats.completed, "Successfully finished", "green"],
    ["Failed", stats.failed, "Needs attention", "red"],
  ];
  return (
    <section className="stats-grid">
      {cards.map(([label, value, hint, color]) => (
        <article className={`stat-card ${color}`} key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
          <small>{hint}</small>
        </article>
      ))}
    </section>
  );
}
function TaskCard({ task, mode, onAction, onDelete }) {
  const config = {
    new: ["New", "blue"],
    active: ["In progress", "amber"],
    completed: ["Completed", "green"],
    failed: ["Failed", "red"],
  }[task.status];
  return (
    <article className="task-card">
      <div className="task-top">
        <span className={`badge ${config[1]}`}>{config[0]}</span>
        <span className="task-date">Due {task.date}</span>
      </div>
      <h3>{task.title}</h3>
      <p>{task.description || "No description provided."}</p>
      <div className="task-meta">
        <span>{task.category}</span>
      </div>
      {mode === "employee" && (
        <div className="task-actions">
          {task.status === "new" && (
            <button className="primary" onClick={() => onAction("active")}>
              Accept task
            </button>
          )}
          {task.status === "active" && (
            <>
              <button className="success" onClick={() => onAction("completed")}>
                Mark complete
              </button>
              <button
                className="danger-outline"
                onClick={() => onAction("failed")}
              >
                Mark failed
              </button>
            </>
          )}
        </div>
      )}
      {mode === "admin" && (
        <div className="task-actions">
          <button className="danger-outline" onClick={onDelete}>
            Delete task
          </button>
        </div>
      )}
    </article>
  );
}
function EmployeeView({ employee, onLogout, onUpdate }) {
  const [filter, setFilter] = useState("all");
  const stats = countTasks(employee.tasks);
  const visible = employee.tasks
    .filter((t) => filter === "all" || t.status === filter)
    .sort((a, b) => a.date.localeCompare(b.date));
  return (
    <Shell
      title={`Hello, ${employee.name}`}
      subtitle="EMPLOYEE DASHBOARD"
      name={employee.name}
      onLogout={onLogout}
    >
      <StatCards stats={{ ...stats, total: employee.tasks.length }} />
      <section className="section">
        <div className="section-heading">
          <div>
            <h2>My tasks</h2>
            <p>Review your assignments and update their progress.</p>
          </div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All tasks</option>
            <option value="new">New</option>
            <option value="active">In progress</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div className="task-grid">
          {visible.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              mode="employee"
              onAction={(status) => onUpdate(employee.id, task.id, status)}
            />
          ))}
          {!visible.length && (
            <Empty text="No tasks in this view. You are all caught up!" />
          )}
        </div>
      </section>
    </Shell>
  );
}
function AdminView({ admin, employees, onLogout, onCreate, onDelete }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: today(),
    category: "Development",
    assigneeId: String(employees[0]?.id || ""),
  });
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [notice, setNotice] = useState("");
  const allTasks = employees.flatMap((emp) =>
    emp.tasks.map((task) => ({
      ...task,
      employeeName: emp.name,
      employeeId: emp.id,
    })),
  );
  const stats = countTasks(allTasks);
  const filteredEmployees = employees.filter((e) =>
    `${e.name} ${e.email}`.toLowerCase().includes(query.toLowerCase()),
  );
  const submit = (e) => {
    e.preventDefault();
    if (!form.assigneeId) return;
    onCreate({ ...form, assigneeId: Number(form.assigneeId) });
    setNotice("Task assigned successfully.");
    setForm((f) => ({ ...f, title: "", description: "" }));
    setTimeout(() => setNotice(""), 3000);
  };
  return (
    <Shell
      title="Admin dashboard"
      subtitle="OVERVIEW & CONTROL"
      name={admin.name}
      onLogout={onLogout}
    >
      <StatCards stats={{ ...stats, total: allTasks.length }} />
      <div className="admin-layout">
        <section className="panel create-panel">
          <div className="section-heading">
            <div>
              <h2>Create a task</h2>
              <p>Assign work to a team member.</p>
            </div>
          </div>
          <form className="task-form" onSubmit={submit}>
            <label>
              Task title
              <input
                required
                maxLength="80"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. Build reports page"
              />
            </label>
            <label>
              Assign to
              <select
                required
                value={form.assigneeId}
                onChange={(e) =>
                  setForm({ ...form, assigneeId: e.target.value })
                }
              >
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name} · {emp.email}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                Due date
                <input
                  required
                  type="date"
                  min={today()}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </label>
              <label>
                Category
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  {[
                    "Development",
                    "Design",
                    "Testing",
                    "Bug Fix",
                    "Documentation",
                    "Meeting",
                    "Other",
                  ].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Description
              <textarea
                rows="4"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Add task details and expected outcome..."
              />
            </label>
            {notice && <p className="success-text">{notice}</p>}
            <button className="primary full">＋ Assign task</button>
          </form>
        </section>
        <section className="panel team-panel">
          <div className="section-heading">
            <div>
              <h2>Team members</h2>
              <p>
                {employees.length} employees · {allTasks.length} tasks
              </p>
            </div>
            <input
              className="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search team..."
            />
          </div>
          <div className="team-list">
            {filteredEmployees.map((emp) => {
              const c = countTasks(emp.tasks);
              return (
                <div className="team-member" key={emp.id}>
                  <div className="member-main">
                    <div className="avatar">{emp.name[0]}</div>
                    <div>
                      <b>{emp.name}</b>
                      <span>{emp.email}</span>
                    </div>
                  </div>
                  <div className="member-stats">
                    <span>{c.newTask} new</span>
                    <span>{c.active} active</span>
                    <span>{c.completed} done</span>
                  </div>
                  <b className="total-count">{emp.tasks.length}</b>
                </div>
              );
            })}
            {!filteredEmployees.length && (
              <Empty text="No team members found." />
            )}
          </div>
        </section>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <h2>All tasks</h2>
            <p>Track and manage assignments across your team.</p>
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">Every status</option>
            <option value="new">New</option>
            <option value="active">In progress</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div className="task-grid">
          {allTasks
            .filter((t) => status === "all" || t.status === status)
            .map((task) => (
              <div key={`${task.employeeId}-${task.id}`}>
                <p className="assigned-label">
                  Assigned to <b>{task.employeeName}</b>
                </p>
                <TaskCard
                  task={task}
                  mode="admin"
                  onDelete={() => onDelete(task.employeeId, task.id)}
                />
              </div>
            ))}
          {!allTasks.length && (
            <Empty text="No tasks yet. Create the first task above." />
          )}
        </div>
      </section>
    </Shell>
  );
}
function Empty({ text }) {
  return <div className="empty-state">{text}</div>;
}
export default App;
