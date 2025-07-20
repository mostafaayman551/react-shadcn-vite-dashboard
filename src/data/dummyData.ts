export interface StatCard {
  id?: number | string;
  title: string;
  value: number;
  icon: string;
}

export interface ChartData {
  id?: number | string;
  name: string;
  value: number;
}

export interface Activity {
  id?: number | string;
  user: string;
  action: string;
  time: string;
  type: "info" | "warning" | "success";
}

export const statsCards: StatCard[] = [
  {
    id: 1,
    title: "All Users",
    value: 1500,
    icon: "users",
  },
  {
    id: 2,
    title: "Active Users",
    value: 1200,
    icon: "active-users",
  },
  {
    id: 3,
    title: "New Signups",
    value: 300,
    icon: "new-signups",
  },
  {
    id: 4,
    title: "Total Revenue",
    value: 50000,
    icon: "revenue",
  },
];

export const chartData: ChartData[] = [
  {
    id: 1,
    name: "January",
    value: 1200,
  },
  {
    id: 2,
    name: "February",
    value: 1500,
  },
  {
    id: 3,
    name: "March",
    value: 1800,
  },
  {
    id: 4,
    name: "April",
    value: 1300,
  },
  {
    id: 5,
    name: "May",
    value: 1700,
  },
  {
    id: 6,
    name: "June",
    value: 1850,
  },
  {
    id: 7,
    name: "July",
    value: 3000,
  },
  {
    id: 8,
    name: "August",
    value: 2750,
  },
];

export const recentActivities: Activity[] = [
  {
    id: 1,
    user: "John Doe",
    action: "Completed purchase of Premium Plan",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated profile information",
    time: "1 hour ago",
    type: "info",
  },
  {
    id: 3,
    user: "Bob Johnson",
    action: "Started a new project",
    time: "3 hours ago",
    type: "warning",
  },
  {
    id: 4,
    user: "Michael Brown",
    action: "Commented on a project",
    time: "2 hours ago",
    type: "info",
  },
  {
    id: 5,
    user: "Sarah Lee",
    action: "Completed a task",
    time: "4 hours ago",
    type: "success",
  },
  {
    id: 6,
    user: "James Davis",
    action: "Started a new task",
    time: "6 hours ago",
    type: "info",
  },
  {
    id: 7,
    user: "Emily Wilson",
    action: "Uploaded a new file",
    time: "5 hours ago",
    type: "success",
  },
  {
    id: 8,
    user: "David Martinez",
    action: "Deleted an old project",
    time: "7 hours ago",
    type: "warning",
  },
  {
    id: 9,
    user: "Laura Garcia",
    action: "Shared a project with a team member",
    time: "8 hours ago",
    type: "info",
  },
];
