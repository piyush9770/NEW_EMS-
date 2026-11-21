# Employee Management System (EMS)

A React + Vite employee task management app with admin and employee dashboards.

## Run locally

```bash
npm install
npm run dev
```

## Demo logins
- Admin: `admin@example.com` / `123`
- Employee: `e@e.com` / `123`
- Other employees: `employee2@example.com` through `employee5@example.com` / `123`

## Features
- Role-based admin and employee login, with session persistence in browser storage.
- Admin dashboard with live task totals and employee workload summaries.
- Create and assign tasks to employees with due dates, categories and descriptions.
- Search team members, filter tasks by status, and delete tasks.
- Employee dashboard with task counts, status filters, task acceptance, completion and failure actions.
- Changes persist in localStorage and are reflected in both dashboards.

## Important note
This is a frontend learning/demo application. Authentication and data are stored in browser localStorage, so credentials are not secure and data is limited to the current browser. Use a backend API, hashed passwords, authorization and a database before production deployment.
