# API Setup Guide

## Environment Configuration

Create a `.env.local` file in your project root with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Replace `http://localhost:3001/api` with your actual backend API URL.

## What's Been Set Up

### 1. React Query + Axios Integration

- ✅ Installed `@tanstack/react-query` and `axios`
- ✅ Created Axios client with interceptors for auth and error handling
- ✅ Set up React Query client with proper configuration
- ✅ Added QueryProvider to the app layout

### 2. API Client (`src/lib/api.ts`)

- Base URL configuration from environment variables
- Request/response interceptors for authentication
- Error handling for common HTTP status codes
- Timeout configuration

### 3. React Query Hooks (`src/lib/hooks/use-projects.ts`)

- `useProjects()` - Fetch all projects
- `useProject(id)` - Fetch single project
- `useCreateProject()` - Create new project
- `useUpdateProject()` - Update existing project
- `useDeleteProject()` - Delete project

### 4. Updated Components

- NewProjectDialog now uses the `useCreateProject` hook
- Submit button shows loading state
- Automatic form reset on successful creation
- Toast notifications for success/error states

## Usage Example

```tsx
import { useProjects, useCreateProject } from "@/lib/hooks/use-projects";

function ProjectsPage() {
  const { data: projects, isLoading } = useProjects();
  const createProject = useCreateProject();

  const handleCreate = (data) => {
    createProject.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {projects?.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
}
```

## Backend API Endpoints Expected

Your backend should have these endpoints:

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## Authentication

The API client automatically includes the `Authorization: Bearer <token>` header if a token is stored in localStorage under the key `authToken`.
